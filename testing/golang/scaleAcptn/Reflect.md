## Reflect

The first step felt like an effort. We've made several `go` files to create and test an HTTP handler that returns a hard-coded string. This "iteration 0" ceremony and setup will serve us well for further iterations.

Changing functionality should be simple and controlled by driving it through the specification and dealing with whatever changes it forces us to make. Now the `DockerFile` and `testcontainers` are set up for our acceptance test; we shouldn't have to change these files unless the way we construct our application changes.

We'll see this with our following requirement, greet a particular person.

## Reflect

The behaviour change felt simple, right? OK, maybe it was simply due to the nature of the problem, but this method of work gives you discipline and a simple, repeatable way of changing your system from top to bottom:

- Analyse your problem and identify a slight improvement to your system that pushes you in the right direction
- Capture the new essential complexity in a specification
- Follow the compilation errors until the AT runs
- Update your implementation to make the system behave according to the specification
- Refactor

After the pain of the first iteration, we didn't have to edit our acceptance test code because we have the separation of specifications, drivers and implementation. Changing our specification required us to update our driver and finally our implementation, but the boilerplate code around _how_ to spin up the system as a container was unaffected.

Even with the overhead of building a docker image for our application and spinning up the container, the feedback loop for testing our **entire** application is very tight:

```
quii@Chriss-MacBook-Pro go-specs-greet % go test ./...
ok  	github.com/quii/go-specs-greet	0.181s
ok  	github.com/quii/go-specs-greet/cmd/httpserver	2.221s
?   	github.com/quii/go-specs-greet/specifications	[no test files]
```

Now, imagine your CTO has now decided that gRPC is _the future_. She wants you to expose this same functionality over a gRPC server whilst maintaining the existing HTTP server.

This is an example of **accidental complexity**. Remember, accidental complexity is the complexity we have to deal with because we're working with computers, stuff like networks, disks, APIs, etc. **The essential complexity has not changed**, so we shouldn't have to change our specifications.

Many repository structures and design patterns are mainly dealing with separating types of complexity. For instance, "ports and adapters" ask that you separate your domain code from anything to do with accidental complexity; that code lives in an "adapters" folder.

### Making the change easy

Sometimes, it makes sense to do some refactoring _before_ making a change.

> First make the change easy, then make the easy change

~Kent Beck

For that reason, let's move our `http` code - `driver.go` and `handler.go` - into a package called `httpserver` within an `adapters` folder and change their package names to `httpserver`.

You'll now need to import the root package into `handler.go` to refer to the Greet method...

```go
package httpserver

import (
	"fmt"
	"net/http"

	go_specs_greet "github.com/quii/go-specs-greet/domain/interactions"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	fmt.Fprint(w, go_specs_greet.Greet(name))
}

```

import your httpserver adapter into main.go:

```go
package main

import (
	"net/http"

	"github.com/quii/go-specs-greet/adapters/httpserver"
)

func main() {
	handler := http.HandlerFunc(httpserver.Handler)
	http.ListenAndServe(":8080", handler)
}
```

and update the import and reference to `Driver` in greeter_server_test.go:

```go
driver := httpserver.Driver{BaseURL: "http://localhost:8080", Client: &client}
```

Finally, it's helpful to gather our domain level code in to its own folder too. Don't be lazy and have a `domain` folder in your projects with hundreds of unrelated types and functions. Make an effort to think about your domain and group ideas that belong together, together. This will make your project easier to understand and will improve the quality of your imports.

Rather than seeing

```go
domain.Greet
```

Which is just a bit weird, instead favour

```go
interactions.Greet
```

Create a `domain` folder to house all your domain code, and within it, an `interactions` folder. Depending on your tooling, you may have to update some imports and code.

Our project tree should now look like this:

```
quii@Chriss-MacBook-Pro go-specs-greet % tree
.
├── Dockerfile
├── Makefile
├── README.md
├── adapters
│   └── httpserver
│       ├── driver.go
│       └── handler.go
├── cmd
│   └── httpserver
│       ├── greeter_server_test.go
│       └── main.go
├── domain
│   └── interactions
│       ├── greet.go
│       └── greet_test.go
├── go.mod
├── go.sum
└── specifications
    └── adapters.go
    └── greet.go

```

Our domain code, **essential complexity**, lives at the root of our go module, and code that will allow us to use them in "the real world" are organised into **adapters**. The `cmd` folder is where we can compose these logical groupings into practical applications, which have black-box tests to verify it all works. Nice!

Finally, we can do a _tiny_ bit of tidying up our acceptance test. If you consider the high-level steps of our acceptance test:

- Build a docker image
- Wait for it to be listening on _some_ port
- Create a driver that understands how to translate the DSL into system specific calls
- Plug in the driver into the specification

... you'll realise we have the same requirements for an acceptance test for the gRPC server!

The `adapters` folder seems a good place as any, so inside a file called `docker.go`, encapsulate the first two steps in a function that we'll reuse next.

```go
package adapters

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/alecthomas/assert/v2"
	"github.com/docker/go-connections/nat"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

func StartDockerServer(
	t testing.TB,
	port string,
	dockerFilePath string,
) {
	ctx := context.Background()
	t.Helper()
	req := testcontainers.ContainerRequest{
		FromDockerfile: testcontainers.FromDockerfile{
			Context:       "../../.",
			Dockerfile:    dockerFilePath,
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

This gives us an opportunity to clean up our acceptance test a little

```go
func TestGreeterServer(t *testing.T) {
	var (
		port           = "8080"
		dockerFilePath = "./cmd/httpserver/Dockerfile"
		baseURL        = fmt.Sprintf("http://localhost:%s", port)
		driver         = httpserver.Driver{BaseURL: baseURL, Client: &http.Client{
			Timeout: 1 * time.Second,
		}}
	)

	adapters.StartDockerServer(t, port, dockerFilePath)
	specifications.GreetSpecification(t, driver)
}
```

This should make writing the _next_ test simpler.

