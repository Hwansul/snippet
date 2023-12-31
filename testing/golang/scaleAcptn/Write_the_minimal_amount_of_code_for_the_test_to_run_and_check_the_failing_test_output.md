## Write the minimal amount of code for the test to run and check the failing test output

Hold your nose; remember, we can refactor when the test has passed. Here's the code for the driver in `driver.go` which we will place in the project root:

```go
package go_specs_greet

import (
	"io"
	"net/http"
)

type Driver struct {
	BaseURL string
}

func (d Driver) Greet() (string, error) {
	res, err := http.Get(d.BaseURL + "/greet")
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


Notes:

- You could argue that I should be writing tests to drive out the various `if err != nil`, but in my experience, so long as you're not doing anything with the `err`, tests that say "you return the error you get" are relatively low value.
- **You shouldn't use the default HTTP client**. Later we'll pass in an HTTP client to configure it with timeouts etc., but for now, we're just trying to get ourselves to a passing test.
-  In our `greeter_server_test.go` we called the Driver function from `go_specs_greet` package which we have now created, don't forget to add `github.com/quii/go-specs-greet` to its imports.
Try and rerun the tests; they should now compile but not pass.

```
Get "http://localhost:8080/greet": dial tcp [::1]:8080: connect: connection refused
```

We have a `Driver`, but we have not started our application yet, so it cannot do an HTTP request. We need our acceptance test to coordinate building, running and finally killing our system for the test to run.

### Running our application

It's common for teams to build Docker images of their systems to deploy, so for our test we'll do the same

To help us use Docker in our tests, we will use [Testcontainers](https://golang.testcontainers.org). Testcontainers gives us a programmatic way to build Docker images and manage container life-cycles.

`go get github.com/testcontainers/testcontainers-go`

Now you can edit `cmd/httpserver/greeter_server_test.go` to read as follows:

```go
package main_test

import (
	"context"
	"testing"

	"github.com/alecthomas/assert/v2"
	go_specs_greet "github.com/quii/go-specs-greet"
	"github.com/quii/go-specs-greet/specifications"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

func TestGreeterServer(t *testing.T) {
	ctx := context.Background()

	req := testcontainers.ContainerRequest{
		FromDockerfile: testcontainers.FromDockerfile{
			Context:    "../../.",
			Dockerfile: "./cmd/httpserver/Dockerfile",
			// set to false if you want less spam, but this is helpful if you're having troubles
			PrintBuildLog: true,
		},
		ExposedPorts: []string{"8080:8080"},
		WaitingFor:   wait.ForHTTP("/").WithPort("8080"),
	}
	container, err := testcontainers.GenericContainer(ctx, testcontainers.GenericContainerRequest{
		ContainerRequest: req,
		Started:          true,
	})
	assert.NoError(t, err)
	t.Cleanup(func() {
		assert.NoError(t, container.Terminate(ctx))
	})

	driver := go_specs_greet.Driver{BaseURL: "http://localhost:8080"}
	specifications.GreetSpecification(t, driver)
}
```

Try and run the test.

```
=== RUN   TestGreeterHandler
2022/09/10 18:49:44 Starting container id: 03e8588a1be4 image: docker.io/testcontainers/ryuk:0.3.3
2022/09/10 18:49:45 Waiting for container id 03e8588a1be4 image: docker.io/testcontainers/ryuk:0.3.3
2022/09/10 18:49:45 Container is ready id: 03e8588a1be4 image: docker.io/testcontainers/ryuk:0.3.3
    greeter_server_test.go:32: Did not expect an error but got:
        Error response from daemon: Cannot locate specified Dockerfile: ./cmd/httpserver/Dockerfile: failed to create container
--- FAIL: TestGreeterHandler (0.59s)
```

We need to create a Dockerfile for our program. Inside our `httpserver` folder, create a `Dockerfile` and add the following.

```dockerfile
FROM golang:1.18-alpine

WORKDIR /app

COPY go.mod ./

RUN go mod download

COPY . .

RUN go build -o svr cmd/httpserver/*.go

EXPOSE 8080
CMD [ "./svr" ]
```

Don't worry too much about the details here; it can be refined and optimised, but for this example, it'll suffice. The advantage of our approach here is we can later improve our Dockerfile and have a test to prove it works as we intend it to. This is a real strength of having black-box tests!

Try and rerun the test; it should complain about not being able to build the image. Of course, that's because we haven't written a program to build yet!

For the test to fully execute, we'll need to create a program that listens on `8080`, but **that's all**. Stick to the TDD discipline, don't write the production code that would make the test pass until we've verified the test fails as we'd expect.

Create a `main.go` inside our `httpserver` folder with the following

```go
package main

import (
	"log"
	"net/http"
)

func main() {
	handler := http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
	})
	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}
}
```

Try to run the test again, and it should fail with the following.

```
    greet.go:16: Expected values to be equal:
        +Hello, World
        \ No newline at end of file
--- FAIL: TestGreeterHandler (2.09s)
```

## Write the minimal amount of code for the test to run and check the failing test output

Update the driver so that it specifies a `name` query value in the request to ask for a particular `name` to be greeted.

```go
import "io"

func (d Driver) Greet(name string) (string, error) {
	res, err := d.Client.Get(d.BaseURL + "/greet?name=" + name)
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

The test should now run, and fail.

```
    greet.go:16: Expected values to be equal:
        -Hello, world
        \ No newline at end of file
        +Hello, Mike
        \ No newline at end of file
--- FAIL: TestGreeterHandler (1.92s)
```

## Write the minimal amount of code for the test to run and check the failing test output

Create a `grpcserver` folder inside `adapters` and inside it create `driver.go`

```go
package grpcserver

type Driver struct {
	Addr string
}

func (d Driver) Greet(name string) (string, error) {
	return "", nil
}
```

If you run again, it should now _compile_ but not pass because we haven't created a Dockerfile and corresponding program to run.

Create a new `Dockerfile` inside `cmd/grpcserver`.

```dockerfile
FROM golang:1.18-alpine

WORKDIR /app

COPY go.mod ./

RUN go mod download

COPY . .

RUN go build -o svr cmd/grpcserver/*.go

EXPOSE 8080
CMD [ "./svr" ]
```

And a `main.go`

```go
package main

import "fmt"

func main() {
	fmt.Println("implement me")
}
```

You should find now that the test fails because our server is not listening on the port. Now is the time to start building our client and server with gRPC.

## Write the minimal amount of code for the test to run and check the failing test output

Remember we're just trying to get the test to run, so add the method to `Driver`

```go
func (d *Driver) Curse(name string) (string, error) {
	return "", nil
}
```

If you try again, the test should compile, run, and fail

```
greet.go:26: Expected values to be equal:
+Go to hell, Chris!
\ No newline at end of file
```

