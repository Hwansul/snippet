func Registration(w http.ResponseWriter, r *http.Request) {
    var res model.ResponseResult
    var user model.User

    w.Header().Set("Content-Type", "application/json")

    jsonDecoder := json.NewDecoder(r.Body)
    jsonDecoder.DisallowUnknownFields()
    defer r.Body.Close()

    // check if there is proper json body or error
    if err := jsonDecoder.Decode(&user); err != nil {
        res.Error = err.Error()
        // return 400 status codes
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(res)
        return
    }

    // Connect to mongodb
    client, _ := mongo.NewClient(options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
    err := client.Connect(ctx)
    if err != nil {
        panic(err)
    }
    defer client.Disconnect(ctx)
    // Check if username already exists in users datastore, if so, 400
    // else insert user right away
    collection := client.Database("test").Collection("users")
    filter := bson.D{{"username", user.Username}}
    var foundUser model.User
    err = collection.FindOne(context.TODO(), filter).Decode(&foundUser)
    if foundUser.Username == user.Username {
        res.Error = UserExists
        // return 400 status codes
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(res)
        return
    }

    pass, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
    if err != nil {
        res.Error = err.Error()
        // return 400 status codes
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(res)
        return
    }
    user.Password = string(pass)

    insertResult, err := collection.InsertOne(context.TODO(), user)
    if err != nil {
        res.Error = err.Error()
        // return 400 status codes
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(res)
        return
    }

    // return 200
    w.WriteHeader(http.StatusOK)
    res.Result = fmt.Sprintf("%s: %s", UserCreated, insertResult.InsertedID)
    json.NewEncoder(w).Encode(res)
    return
}

func Teapot(res http.ResponseWriter, req *http.Request) {
    res.WriteHeader(http.StatusTeapot)
}

func TestTeapotHandler(t *testing.T) {
    req := httptest.NewRequest(http.MethodGet, "/", nil)
    res := httptest.NewRecorder()

    Teapot(res, req)

    if res.Code != http.StatusTeapot {
        t.Errorf("got status %d but wanted %d", res.Code, http.StatusTeapot)
    }
}

type UserService interface {
    Register(user User) (insertedID string, err error)
}

type UserServer struct {
    service UserService
}

func NewUserServer(service UserService) *UserServer {
    return &UserServer{service: service}
}

func (u *UserServer) RegisterUser(w http.ResponseWriter, r *http.Request) {
    defer r.Body.Close()

    // request parsing and validation
    var newUser User
    err := json.NewDecoder(r.Body).Decode(&newUser)

    if err != nil {
        http.Error(w, fmt.Sprintf("could not decode user payload: %v", err), http.StatusBadRequest)
        return
    }

    // call a service thing to take care of the hard work
    insertedID, err := u.service.Register(newUser)

    // depending on what we get back, respond accordingly
    if err != nil {
        //todo: handle different kinds of errors differently
        http.Error(w, fmt.Sprintf("problem registering new user: %v", err), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
    fmt.Fprint(w, insertedID)
}

type MockUserService struct {
    RegisterFunc    func(user User) (string, error)
    UsersRegistered []User
}

func (m *MockUserService) Register(user User) (insertedID string, err error) {
    m.UsersRegistered = append(m.UsersRegistered, user)
    return m.RegisterFunc(user)
}

func TestRegisterUser(t *testing.T) {
    t.Run("can register valid users", func(t *testing.T) {
        user := User{Name: "CJ"}
        expectedInsertedID := "whatever"

        service := &MockUserService{
            RegisterFunc: func(user User) (string, error) {
                return expectedInsertedID, nil
            },
        }
        server := NewUserServer(service)

        req := httptest.NewRequest(http.MethodGet, "/", userToJSON(user))
        res := httptest.NewRecorder()

        server.RegisterUser(res, req)

        assertStatus(t, res.Code, http.StatusCreated)

        if res.Body.String() != expectedInsertedID {
            t.Errorf("expected body of %q but got %q", res.Body.String(), expectedInsertedID)
        }

        if len(service.UsersRegistered) != 1 {
            t.Fatalf("expected 1 user added but got %d", len(service.UsersRegistered))
        }

        if !reflect.DeepEqual(service.UsersRegistered[0], user) {
            t.Errorf("the user registered %+v was not what was expected %+v", service.UsersRegistered[0], user)
        }
    })

    t.Run("returns 400 bad request if body is not valid user JSON", func(t *testing.T) {
        server := NewUserServer(nil)

        req := httptest.NewRequest(http.MethodGet, "/", strings.NewReader("trouble will find me"))
        res := httptest.NewRecorder()

        server.RegisterUser(res, req)

        assertStatus(t, res.Code, http.StatusBadRequest)
    })

    t.Run("returns a 500 internal server error if the service fails", func(t *testing.T) {
        user := User{Name: "CJ"}

        service := &MockUserService{
            RegisterFunc: func(user User) (string, error) {
                return "", errors.New("couldn't add new user")
            },
        }
        server := NewUserServer(service)

        req := httptest.NewRequest(http.MethodGet, "/", userToJSON(user))
        res := httptest.NewRecorder()

        server.RegisterUser(res, req)

        assertStatus(t, res.Code, http.StatusInternalServerError)
    })
}

type MongoUserService struct {
}

func NewMongoUserService() *MongoUserService {
    //todo: pass in DB URL as argument to this function
    //todo: connect to db, create a connection pool
    return &MongoUserService{}
}

func (m MongoUserService) Register(user User) (insertedID string, err error) {
    // use m.mongoConnection to perform queries
    panic("implement me")
}

func main() {
    mongoService := NewMongoUserService()
    server := NewUserServer(mongoService)
    http.ListenAndServe(":8000", http.HandlerFunc(server.RegisterUser))
}
