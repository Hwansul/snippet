// take our lego-bricks and assemble the system for the test
fakeAPI1 := fakes.NewAPI1()
fakeAPI2 := fakes.NewAPI2() // etc..
customerService := customer.NewService(fakeAPI1, fakeAPI2, etc...)

// create new customer
newCustomerRequest := NewCustomerReq{
    // ...
}
createdCustomer, err := customerService.New(newCustomerRequest)
assert.NoErr(t, err)

// we can verify all the details are as expected in the various fakes in a natural way, as if they're normal APIs
fakeAPI1Customer := fakeAPI1.Get(createdCustomer.FakeAPI1Details.ID)
assert.Equal(t, fakeAPI1Customer.SocialSecurityNumber, newCustomerRequest.SocialSecurityNumber)

// repeat for the other apis we care about

// update customer
updatedCustomerRequest := NewUpdateReq{SocialSecurityNumber: "123", InternalID: createdCustomer.InternalID}
assert.NoErr(t, customerService.Update(updatedCustomerRequest))

// again we can check the various fakes to see if the state ends up how we want it
updatedFakeAPICustomer := fakeAPI1.Get(createdCustomer.FakeAPI1Details.ID)
assert.Equal(t, updatedFakeAPICustomer.SocialSecurityNumber, updatedCustomerRequest.SocialSecurityNumber)

type API1Customer struct {
    Name string
    ID   string
}

type API1 interface {
    CreateCustomer(ctx context.Context, name string) (API1Customer, error)
    GetCustomer(ctx context.Context, id string) (API1Customer, error)
    UpdateCustomer(ctx context.Context, id string, name string) error
}

type API1Contract struct {
    NewAPI1 func() API1
}

func (c API1Contract) Test(t *testing.T) {
    t.Run("can create, get and update a customer", func(t *testing.T) {
        var (
            ctx  = context.Background()
            sut  = c.NewAPI1()
            name = "Bob"
        )

        customer, err := sut.CreateCustomer(ctx, name)
        expect.NoErr(t, err)

        got, err := sut.GetCustomer(ctx, customer.ID)
        expect.NoErr(t, err)
        expect.Equal(t, customer, got)

        newName := "Robert"
        expect.NoErr(t, sut.UpdateCustomer(ctx, customer.ID, newName))

        got, err = sut.GetCustomer(ctx, customer.ID)
        expect.NoErr(t, err)
        expect.Equal(t, newName, got.Name)
    })

    // example of strange behaviours we didn't expect
    t.Run("the system will not allow you to add 'Dave' as a customer", func(t *testing.T) {
        var (
            ctx  = context.Background()
            sut  = c.NewAPI1()
            name = "Dave"
        )

        _, err := sut.CreateCustomer(ctx, name)
        expect.Err(t, ErrDaveIsForbidden)
    })
}

func TestInMemoryAPI1(t *testing.T) {
    API1Contract{NewAPI1: func() API1 {
        return inmemory.NewAPI1()
    }}.Test(t)
}

func NewAPI1() *API1 {
    return &API1{customers: make(map[string]planner.API1Customer)}
}

type API1 struct {
    i         int
    customers map[string]planner.API1Customer
}

func (a *API1) CreateCustomer(ctx context.Context, name string) (planner.API1Customer, error) {
    if name == "Dave" {
        return planner.API1Customer{}, ErrDaveIsForbidden
    }

    newCustomer := planner.API1Customer{
        Name: name,
        ID:   strconv.Itoa(a.i),
    }
    a.customers[newCustomer.ID] = newCustomer
    a.i++
    return newCustomer, nil
}

func (a *API1) GetCustomer(ctx context.Context, id string) (planner.API1Customer, error) {
    return a.customers[id], nil
}

func (a *API1) UpdateCustomer(ctx context.Context, id string, name string) error {
    customer := a.customers[id]
    customer.Name = name
    a.customers[id] = customer
    return nil
}

type API1Decorator struct {
    delegate           API1
    CreateCustomerFunc func(ctx context.Context, name string) (API1Customer, error)
    GetCustomerFunc    func(ctx context.Context, id string) (API1Customer, error)
    UpdateCustomerFunc func(ctx context.Context, id string, name string) error
}

// assert API1Decorator implements API1
var _ API1 = &API1Decorator{}

func NewAPI1Decorator(delegate API1) *API1Decorator {
    return &API1Decorator{delegate: delegate}
}

func (a *API1Decorator) CreateCustomer(ctx context.Context, name string) (API1Customer, error) {
    if a.CreateCustomerFunc != nil {
        return a.CreateCustomerFunc(ctx, name)
    }
    return a.delegate.CreateCustomer(ctx, name)
}

func (a *API1Decorator) GetCustomer(ctx context.Context, id string) (API1Customer, error) {
    if a.GetCustomerFunc != nil {
        return a.GetCustomerFunc(ctx, id)
    }
    return a.delegate.GetCustomer(ctx, id)
}

func (a *API1Decorator) UpdateCustomer(ctx context.Context, id string, name string) error {
    if a.UpdateCustomerFunc != nil {
        return a.UpdateCustomerFunc(ctx, id, name)
    }
    return a.delegate.UpdateCustomer(ctx, id, name)
}

failingAPI1 = NewAPI1Decorator(inmemory.NewAPI1())
failingAPI1.UpdateCustomerFunc = func(ctx context.Context, id string, name string) error {
    return errors.New("failed to update customer")
}
