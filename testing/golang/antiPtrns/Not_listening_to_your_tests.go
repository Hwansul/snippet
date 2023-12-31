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
