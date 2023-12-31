package go_specs_greet_test

import (
    "testing"

    go_specs_greet "github.com/quii/go-specs-greet"
    "github.com/quii/go-specs-greet/specifications"
)

func TestGreet(t *testing.T) {
    specifications.GreetSpecification(t, go_specs_greet.Greet)
}


type GreetAdapter func(name string) string

func (g GreetAdapter) Greet(name string) (string, error) {
    return g(name), nil
}

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
