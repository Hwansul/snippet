## Not listening to your tests

[Dave Farley in his video "When TDD goes wrong"](https://www.youtube.com/watch?v=UWtEVKVPBQ0&feature=youtu.be) points out,

> TDD gives you the fastest feedback possible on your design

From my own experience, a lot of developers are trying to practice TDD but frequently ignore the signals coming back to them from the TDD process. So they're still stuck with fragile, annoying systems, with a poor test suite.

Simply put, if testing your code is difficult, then _using_ your code is difficult too. Treat your tests as the first user of your code and then you'll see if your code is pleasant to work with or not.

I've emphasised this a lot in the book, and I'll say it again **listen to your tests**.

### Excessive setup, too many test doubles, etc.

Ever looked at a test with 20, 50, 100, 200 lines of setup code before anything interesting in the test happens? Do you then have to change the code and revisit the mess and wish you had a different career?

What are the signals here? _Listen_, complicated tests \`==\` complicated code. Why is your code complicated? Does it have to be?

- When you have lots of test doubles in your tests, that means the code you're testing has lots of dependencies - which means your design needs work.
- If your test is reliant on setting up various interactions with mocks, that means your code is making lots of interactions with its dependencies. Ask yourself whether these interactions could be simpler.

#### Leaky interfaces

If you have declared an `interface` that has many methods, that points to a leaky abstraction. Think about how you could define that collaboration with a more consolidated set of methods, ideally one.

#### Interface pollution

As a Go proverb says, *the bigger the interface, the weaker the abstraction*. If you expose a huge interface to the users of your package, you force them to create in their tests a stub/mock that matches the entire API, providing an implementation also for methods they do not use (sometimes, they just panic to make clear that they should not be used). This situation is an anti-pattern known as [interface pollution](https://rakyll.org/interface-pollution/) and this is the reason why the standard library offers you just tiny little interfaces. 

Instead, you should expose from your package a bare struct with all relevant methods exported, leaving to the clients of your API the freedom to declare their own interfaces abstracting over the subset of the methods they need: e.g [go-redis](https://github.com/redis/go-redis) exposes a struct (`redis.Client`) to the API clients.

Generally speaking, you should expose an interface to the clients only when:
- the interface consists of a small and coherent set of functions.
- the interface and its implementation need to be decoupled (e.g. because users can choose among multiple implementations or they need to mock an external dependency).

#### Think about the types of test doubles you use

- Mocks are sometimes helpful, but they're extremely powerful and therefore easy to misuse. Try giving yourself the constraint of using stubs instead.
- Verifying implementation detail with spies is sometimes helpful, but try to avoid it. Remember your implementation detail is usually not important, and you don't want your tests coupled to them if possible. Look to couple your tests to **useful behaviour rather than incidental details**.
- [Read my posts on naming test doubles](https://quii.dev/Start_naming_your_test_doubles_correctly) if the taxonomy of test doubles is a little unclear

#### Consolidate dependencies

Here is some code for a `http.HandlerFunc` to handle new user registrations for a website.

```go
type User struct {
	// Some user fields
}

type UserStore interface {
	CheckEmailExists(email string) (bool, error)
	StoreUser(newUser User) error
}

type Emailer interface {
	SendEmail(to User, body string, subject string) error
}

func NewRegistrationHandler(userStore UserStore, emailer Emailer) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		// extract out the user from the request body (handle error)
		// check user exists (handle duplicates, errors)
		// store user (handle errors)
		// compose and send confirmation email (handle error)
		// if we got this far, return 2xx response
	}
}
```

At first pass it's reasonable to say the design isn't so bad. It only has 2 dependencies!

Re-evaluate the design by considering the handler's responsibilities:

- Parse the request body into a `User` :white_check_mark:
- Use `UserStore` to check if the user exists :question:
- Use `UserStore` to store the user :question:
- Compose an email :question:
- Use `Emailer` to send the email :question:
- Return an appropriate http response, depending on success, errors, etc :white_check_mark:

To exercise this code, you're going to have to write many tests with varying degrees of test double setups, spies, etc

- What if the requirements expand? Translations for the emails? Sending an SMS confirmation too? Does it make sense to you that you have to change a HTTP handler to accommodate this change?
- Does it feel right that the important rule of "we should send an email" resides within a HTTP handler?
    - Why do you have to go through the ceremony of creating HTTP requests and reading responses to verify that rule?

**Listen to your tests**. Writing tests for this code in a TDD fashion should quickly make you feel uncomfortable (or at least, make the lazy developer in you be annoyed). If it feels painful, stop and think.

What if the design was like this instead?

```go
type UserService interface {
	Register(newUser User) error
}

func NewRegistrationHandler(userService UserService) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		// parse user
		// register user
		// check error, send response
	}
}
```

- Simple to test the handler ✅
- Changes to the rules around registration are isolated away from HTTP, so they are also simpler to test ✅

