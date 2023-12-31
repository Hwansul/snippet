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


package main

import (
    "net/http"

    "github.com/quii/go-specs-greet/adapters/httpserver"
)

func main() {
    handler := http.HandlerFunc(httpserver.Handler)
    http.ListenAndServe(":8080", handler)
}

driver := httpserver.Driver{BaseURL: "http://localhost:8080", Client: &client}

domain.Greet

interactions.Greet

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
