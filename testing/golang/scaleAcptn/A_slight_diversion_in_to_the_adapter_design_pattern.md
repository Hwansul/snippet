## A slight diversion in to the "adapter" design pattern

Now that we've separated our domain logic of greeting people into a separate function, we are now free to write unit tests for our greet function. This is undoubtedly a lot simpler than testing it through a specification that goes through a driver that hits a web server, to get a string!

Wouldn't it be nice if we could reuse our specification here too? After all, the specification's point is decoupled from implementation details. If the specification captures our **essential complexity** and our "domain" code is supposed to model it, we should be able to use them together.

Let's give it a go by creating  `./greet_test.go` as follows:

```go
package go_specs_greet_test

import (
	"testing"

	go_specs_greet "github.com/quii/go-specs-greet"
	"github.com/quii/go-specs-greet/specifications"
)

func TestGreet(t *testing.T) {
	specifications.GreetSpecification(t, go_specs_greet.Greet)
}

```

This would be nice, but it doesn't work

```
./greet_test.go:11:39: cannot use go_specs_greet.Greet (value of type func(name string) string) as type specifications.Greeter in argument to specifications.GreetSpecification:
	func(name string) string does not implement specifications.Greeter (missing Greet method)
```

Our specification wants something that has a method `Greet()` not a function.

The compilation error is frustrating; we have a thing that we "know" is a `Greeter`, but it's not quite in the right **shape** for the compiler to let us use it. This is what the **adapter** pattern caters for.

> In [software engineering](https://en.wikipedia.org/wiki/Software_engineering), the **adapter pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) (also known as [wrapper](https://en.wikipedia.org/wiki/Wrapper_function), an alternative naming shared with the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern)) that allows the [interface](https://en.wikipedia.org/wiki/Interface_(computer_science)) of an existing [class](https://en.wikipedia.org/wiki/Class_(computer_science)) to be used as another interface.[[1\]](https://en.wikipedia.org/wiki/Adapter_pattern#cite_note-HeadFirst-1) It is often used to make existing classes work with others without modifying their [source code](https://en.wikipedia.org/wiki/Source_code).

A lot of fancy words for something relatively simple, which is often the case with design patterns, which is why people tend to roll their eyes at them. The value of design patterns is not specific implementations but a language to describe specific solutions to common problems engineers face. If you have a team that has a shared vocabulary, it reduces the friction in communication.

Add this code in `./specifications/adapters.go`

```go
type GreetAdapter func(name string) string

func (g GreetAdapter) Greet(name string) (string, error) {
	return g(name), nil
}
```

We can now use our adapter in our test to plug our `Greet` function into the specification.

```go
package go_specs_greet_test

import (
	"testing"

	gospecsgreet "github.com/quii/go-specs-greet"
	"github.com/quii/go-specs-greet/specifications"
)

func TestGreet(t *testing.T) {
	specifications.GreetSpecification(
		t,
		specifications.GreetAdapter(gospecsgreet.Greet),
	)
}
```

The adapter pattern is handy when you have a type that exhibits the behaviour that an interface wants, but isn't in the right shape.

