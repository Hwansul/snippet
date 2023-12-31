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

package grpcserver

type Driver struct {
    Addr string
}

func (d Driver) Greet(name string) (string, error) {
    return "", nil
}

package main

import "fmt"

func main() {
    fmt.Println("implement me")
}

func (d *Driver) Curse(name string) (string, error) {
    return "", nil
}
