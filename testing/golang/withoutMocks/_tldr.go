type RecipeBook interface {
    GetRecipes() ([]Recipe, error)
    AddRecipes(...Recipe) error
}

type StubRecipeStore struct {
    recipes []Recipe
    err     error
}

func (s *StubRecipeStore) GetRecipes() ([]Recipe, error) {
    return s.recipes, s.err
}

// AddRecipes omitted for brevity

// in test, we can set up the stub to always return specific recipes, or an error
stubStore := &StubRecipeStore{
    recipes: someRecipes,
}

type SpyRecipeStore struct {
    AddCalls [][]Recipe
    err      error
}

func (s *SpyRecipeStore) AddRecipes(r ...Recipe) error {
    s.AddCalls = append(s.AddCalls, r)
    return s.err
}

// GetRecipes omitted for brevity

// in test
spyStore := &SpyRecipeStore{}
sut := NewThing(spyStore)
sut.DoStuff()

// now we can check the store had the right recipes added by inspectiong spyStore.AddCalls

// set up the mock with expected calls
mockStore := &MockRecipeStore{}
mockStore.WhenCalledWith(someRecipes).Return(someError)

// when the sut uses the dependency, if it doesn't call it with someRecipes, usually mocks will panic

type FakeRecipeStore struct {
    recipes []Recipe
}

func (f *FakeRecipeStore) GetRecipes() ([]Recipe, error) {
    return f.recipes, nil
}

func (f *FakeRecipeStore) AddRecipes(r ...Recipe) error {
    f.recipes = append(f.recipes, r...)
    return nil
}
