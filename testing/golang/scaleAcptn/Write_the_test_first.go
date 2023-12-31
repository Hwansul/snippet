package main_test

import (
    "testing"

    "github.com/quii/go-specs-greet/specifications"
)

func TestGreeterServer(t *testing.T) {
    specifications.GreetSpecification(t, nil)
}

import (
    go_specs_greet "github.com/quii/go-specs-greet"
)

func TestGreeterServer(t *testing.T) {
    driver := go_specs_greet.Driver{BaseURL: "http://localhost:8080"}
    specifications.GreetSpecification(t, driver)
}

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

type MeanGreeter interface {
    Curse(name string) (string, error)
}

func CurseSpecification(t *testing.T, meany MeanGreeter) {
    got, err := meany.Curse("Chris")
    assert.NoError(t, err)
    assert.Equal(t, got, "Go to hell, Chris!")
}

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
