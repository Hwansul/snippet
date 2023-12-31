## Refactor

Whilst this technically isn't a refactor, we shouldn't rely on the default HTTP client, so let's change our Driver, so we can supply one, which our test will give.

```go
import (
	"io"
	"net/http"
)

type Driver struct {
	BaseURL string
	Client  *http.Client
}

func (d Driver) Greet() (string, error) {
	res, err := d.Client.Get(d.BaseURL + "/greet")
	if err != nil {
		return "", err
	}
	defer res.Body.Close()
	greeting, err := io.ReadAll(res.Body)
	if err != nil {
		return "", err
	}
	return string(greeting), nil
}
```

In our test in `cmd/httpserver/greeter_server_test.go`, update the creation of the driver to pass in a client.

```go
client := http.Client{
	Timeout: 1 * time.Second,
}

driver := go_specs_greet.Driver{BaseURL: "http://localhost:8080", Client: &client}
specifications.GreetSpecification(t, driver)
```

It's good practice to keep `main.go` as simple as possible; it should only be concerned with piecing together the building blocks you make into an application.

Create a file in the project root called `handler.go` and move our code into there.

```go
package go_specs_greet

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world")
}
```

Update `main.go` to import and use the handler instead.

```go
package main

import (
	"net/http"

	go_specs_greet "github.com/quii/go-specs-greet"
)

func main() {
	handler := http.HandlerFunc(go_specs_greet.Handler)
	http.ListenAndServe(":8080", handler)
}
```

## Refactor

In [HTTP Handlers Revisited,](https://github.com/quii/learn-go-with-tests/blob/main/http-handlers-revisited.md) we discussed how important it is for HTTP handlers should only be responsible for handling HTTP concerns; any "domain logic" should live outside of the handler. This allows us to develop domain logic in isolation from HTTP, making it simpler to test and understand.

Let's pull apart these concerns.

Update our handler in `./handler.go` as follows:

```go
func Handler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	fmt.Fprint(w, Greet(name))
}
```

Create new file `./greet.go`:
```go
package go_specs_greet

import "fmt"

func Greet(name string) string {
	return fmt.Sprintf("Hello, %s", name)
}
```

## Refactor

We committed several sins to get the test passing, but now they're passing, we have the safety net to refactor.

### Simplify main

As before, we don't want `main` to have too much code inside it. We can move our new `GreetServer` into `adapters/grpcserver` as that's where it should live. In terms of cohesion, if we change the service definition, we want the "blast-radius" of change to be confined to that area of our code.

### Don't redial in our driver every time

We only have one test, but if we expand our specification (we will), it doesn't make sense for the Driver to redial for every RPC call.

```go
package grpcserver

import (
	"context"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type Driver struct {
	Addr string

	connectionOnce sync.Once
	conn           *grpc.ClientConn
	client         GreeterClient
}

func (d *Driver) Greet(name string) (string, error) {
	client, err := d.getClient()
	if err != nil {
		return "", err
	}

	greeting, err := client.Greet(context.Background(), &GreetRequest{
		Name: name,
	})
	if err != nil {
		return "", err
	}

	return greeting.Message, nil
}

func (d *Driver) getClient() (GreeterClient, error) {
	var err error
	d.connectionOnce.Do(func() {
		d.conn, err = grpc.Dial(d.Addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
		d.client = NewGreeterClient(d.conn)
	})
	return d.client, err
}
```

Here we're showing how we can use [`sync.Once`](https://pkg.go.dev/sync#Once) to ensure our `Driver` only attempts to create a connection to our server once.

Let's take a look at the current state of our project structure before moving on.

```
quii@Chriss-MacBook-Pro go-specs-greet % tree
.
├── Makefile
├── README.md
├── adapters
│   ├── docker.go
│   ├── grpcserver
│   │   ├── driver.go
│   │   ├── greet.pb.go
│   │   ├── greet.proto
│   │   ├── greet_grpc.pb.go
│   │   └── server.go
│   └── httpserver
│       ├── driver.go
│       └── handler.go
├── cmd
│   ├── grpcserver
│   │   ├── Dockerfile
│   │   ├── greeter_server_test.go
│   │   └── main.go
│   └── httpserver
│       ├── Dockerfile
│       ├── greeter_server_test.go
│       └── main.go
├── domain
│   └── interactions
│       ├── greet.go
│       └── greet_test.go
├── go.mod
├── go.sum
└── specifications
    └── greet.go
```

- `adapters` have cohesive units of functionality grouped together
- `cmd` holds our applications and corresponding acceptance tests
- Our code is totally decoupled from any accidental complexity

### Consolidating `Dockerfile`

You've probably noticed the two `Dockerfiles` are almost identical beyond the path to the binary we wish to build.

`Dockerfiles` can accept arguments to let us reuse them in different contexts, which sounds perfect. We can delete our 2 Dockerfiles and instead have one at the root of the project with the following

```dockerfile
FROM golang:1.18-alpine

WORKDIR /app

ARG bin_to_build

COPY go.mod ./

RUN go mod download

COPY . .

RUN go build -o svr cmd/${bin_to_build}/main.go

CMD [ "./svr" ]
```

We'll have to update our `StartDockerServer` function to pass in the argument when we build the images

```go
func StartDockerServer(
	t testing.TB,
	port string,
	binToBuild string,
) {
	ctx := context.Background()
	t.Helper()
	req := testcontainers.ContainerRequest{
		FromDockerfile: testcontainers.FromDockerfile{
			Context:    "../../.",
			Dockerfile: "Dockerfile",
			BuildArgs: map[string]*string{
				"bin_to_build": &binToBuild,
			},
			PrintBuildLog: true,
		},
		ExposedPorts: []string{fmt.Sprintf("%s:%s", port, port)},
		WaitingFor:   wait.ForListeningPort(nat.Port(port)).WithStartupTimeout(5 * time.Second),
	}
	container, err := testcontainers.GenericContainer(ctx, testcontainers.GenericContainerRequest{
		ContainerRequest: req,
		Started:          true,
	})
	assert.NoError(t, err)
	t.Cleanup(func() {
		assert.NoError(t, container.Terminate(ctx))
	})
}
```

And finally, update our tests to pass in the image to build (do this for the other test and change `grpcserver` to `httpserver`).

```go
func TestGreeterServer(t *testing.T) {
	var (
		port   = "50051"
		driver = grpcserver.Driver{Addr: fmt.Sprintf("localhost:%s", port)}
	)

	adapters.StartDockerServer(t, port, "grpcserver")
	specifications.GreetSpecification(t, &driver)
}
```

### Separating different kinds of tests

Acceptance tests are great in that they test the whole system works from a pure user-facing, behavioural POV, but they do have their downsides compared to unit tests:

- Slower
- Quality of feedback is often not as focused as a unit test
- Doesn't help you with internal quality, or design

[The Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) guides us on the kind of mix we want for our test suite, you should read Fowler's post for more detail, but the very simplistic summary for this post is "lots of unit tests and a few acceptance tests".

For that reason, as a project grows you often may be in situations where the acceptance tests can take a few minutes to run. To offer a friendly developer experience for people checking out your project, you can enable developers to run the different kinds of tests separately.

It's preferable that running `go test ./...` should be runnable with no further set up from an engineer, beyond say a few key dependencies such as the Go compiler (obviously) and perhaps Docker.

Go provides a mechanism for engineers to run only "short" tests with the [short flag](https://pkg.go.dev/testing#Short)

`go test -short ./...`

We can add to our acceptance tests to see if the user wants to run our acceptance tests by inspecting the value of the flag

```go
if testing.Short() {
	t.Skip()
}
```

I made a `Makefile` to show this usage

```makefile
build:
	golangci-lint run
	go test ./...

unit-tests:
	go test -short ./...
```

### When should I write acceptance tests?

The best practice is to favour having lots of fast running unit tests and a few acceptance tests, but how do you decide when you should write an acceptance test, vs unit tests?

It's difficult to give a concrete rule, but the questions I typically ask myself are:

- Is this an edge case? I'd prefer to unit test those
- Is this something that the non-computer people talk about a lot? I would prefer to have a lot of confidence the key thing "really" works, so I'd add an acceptance test
- Am I describing a user journey, rather than a specific function? Acceptance test
- Would unit tests give me enough confidence? Sometimes you're taking an existing journey that already has an acceptance test, but you're adding other functionality to deal with different scenarios due to different inputs. In this case, adding another acceptance test adds a cost but brings little value, so I'd prefer some unit tests.

## Refactor

Try doing this yourself.

- Extract the `Curse` "domain logic", away from the grpc server, as we did for `Greet`. Use the specification as a unit test against your domain logic
- Have different types in the protobuf to ensure the message types for `Greet` and `Curse` are decoupled.

