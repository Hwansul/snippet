## Enough talk, time to code

Unlike other chapters, you'll need [Docker](https://www.docker.com) installed because we'll be running our applications in containers. It's assumed at this point in the book you're comfortable writing Go code, importing from different packages, etc.

Create a new project with `go mod init github.com/quii/go-specs-greet` (you can put whatever you like here but if you change the path you will need to change all internal imports to match)

Make a folder `specifications` to hold our specifications, and add a file `greet.go`

```go
package specifications

import (
	"testing"

	"github.com/alecthomas/assert/v2"
)

type Greeter interface {
	Greet() (string, error)
}

func GreetSpecification(t testing.TB, greeter Greeter) {
	got, err := greeter.Greet()
	assert.NoError(t, err)
	assert.Equal(t, got, "Hello, world")
}
```

My IDE (Goland) takes care of the fuss of adding dependencies for me, but if you need to do it manually, you'd do

`go get github.com/alecthomas/assert/v2`

Given Farley's acceptance test design (Specification->DSL->Driver->System), we now have a decoupled specification from implementation. It doesn't know or care about _how_ we `Greet`; it's just concerned with the essential complexity of our domain. Admittedly this complexity isn't much right now, but we'll expand upon the spec to add more functionality as we further iterate. It's always important to start small!

You could view the interface as our first step of a DSL; as the project grows, you may find the need to abstract differently, but for now, this is fine.

At this point, this level of ceremony to decouple our specification from implementation might make some people accuse us of "overly abstracting". **I promise you that acceptance tests that are too coupled to implementation become a real burden on engineering teams**. I am confident that most acceptance tests out in the wild are expensive to maintain due to this inappropriate coupling; rather than the reverse of being overly abstract.

We can use this specification to verify any "system" that can `Greet`.

### First system: HTTP API

We require to provide a "greeter service" over HTTP. So we'll need to create:

1. A **driver**. In this case, one works with an HTTP system by using an **HTTP client**. This code will know how to work with our API. Drivers translate DSLs into system-specific calls; in our case, the driver will implement the interface specifications define.
2. An **HTTP server** with a greet API
3. A **test**, which is responsible for managing the life-cycle of spinning up the server and then plugging the driver into the specification to run it as a test

