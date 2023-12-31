## Write the test first

The initial process for creating a black-box test that compiles and runs your program, executes the test and then cleans everything up can be quite labour intensive. That's why it's preferable to do it at the start of your project with minimal functionality. I typically start all my projects with a "hello world" server implementation, with all of my tests set up and ready for me to build the actual functionality quickly.

The mental model of "specifications", "drivers", and "acceptance tests" can take a little time to get used to, so follow carefully. It can be helpful to "work backwards" by trying to call the specification first.

Create some structure to house the program we intend to ship.

`mkdir -p cmd/httpserver`

Inside the new folder, create a new file `greeter_server_test.go`, and add the following.

```go
package main_test

import (
	"testing"

	"github.com/quii/go-specs-greet/specifications"
)

func TestGreeterServer(t *testing.T) {
	specifications.GreetSpecification(t, nil)
}
```

We wish to run our specification in a Go test. We already have access to a `*testing.T`, so that's the first argument, but what about the second?

`specifications.Greeter` is an interface, which we will implement with a `Driver` by changing the new TestGreeterServer code to the following:

```go
import (
	go_specs_greet "github.com/quii/go-specs-greet"
)

func TestGreeterServer(t *testing.T) {
	driver := go_specs_greet.Driver{BaseURL: "http://localhost:8080"}
	specifications.GreetSpecification(t, driver)
}
```

It would be favourable for our `Driver` to be configurable to run it against different environments, including locally, so we have added a `BaseURL` field.

## Write the test first

Edit our specification

```go
package specifications

import (
	"testing"

	"github.com/alecthomas/assert/v2"
)

type Greeter interface {
	Greet(name string) (string, error)
}

func GreetSpecification(t testing.TB, greeter Greeter) {
	got, err := greeter.Greet("Mike")
	assert.NoError(t, err)
	assert.Equal(t, got, "Hello, Mike")
}
```

To allow us to greet specific people, we need to change the interface to our system to accept a `name` parameter.

## Write the test first

This new functionality can be accomplished by creating a new `adapter` to interact with our domain code. For that reason we:

- Shouldn't have to change the specification;
- Should be able to reuse the specification;
- Should be able to reuse the domain code.

Create a new folder `grpcserver` inside `cmd` to house our new program and the corresponding acceptance test. Inside `cmd/grpc_server/greeter_server_test.go`, add an acceptance test, which looks very similar to our HTTP server test, not by coincidence but by design.

```go
package main_test

import (
	"fmt"
	"testing"

	"github.com/quii/go-specs-greet/adapters"
	"github.com/quii/go-specs-greet/adapters/grpcserver"
	"github.com/quii/go-specs-greet/specifications"
)

func TestGreeterServer(t *testing.T) {
	var (
		port           = "50051"
		dockerFilePath = "./cmd/grpcserver/Dockerfile"
		driver         = grpcserver.Driver{Addr: fmt.Sprintf("localhost:%s", port)}
	)

	adapters.StartDockerServer(t, port, dockerFilePath)
	specifications.GreetSpecification(t, &driver)
}
```

The only differences are:

- We use a different docker file, because we're building a different program
- This means we'll need a new `Driver`, that'll use `gRPC` to interact with our new program

## Write the test first

This is brand-new behaviour, so we should start with an acceptance test. In our specification file, add the following

```go
type MeanGreeter interface {
	Curse(name string) (string, error)
}

func CurseSpecification(t *testing.T, meany MeanGreeter) {
	got, err := meany.Curse("Chris")
	assert.NoError(t, err)
	assert.Equal(t, got, "Go to hell, Chris!")
}
```

Pick one of our acceptance tests and try to use the specification

```go
func TestGreeterServer(t *testing.T) {
	if testing.Short() {
		t.Skip()
	}
	var (
		port   = "50051"
		driver = grpcserver.Driver{Addr: fmt.Sprintf("localhost:%s", port)}
	)

	t.Cleanup(driver.Close)
	adapters.StartDockerServer(t, port, "grpcserver")
	specifications.GreetSpecification(t, &driver)
	specifications.CurseSpecification(t, &driver)
}
```

