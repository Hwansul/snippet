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

client := http.Client{
    Timeout: 1 * time.Second,
}

driver := go_specs_greet.Driver{BaseURL: "http://localhost:8080", Client: &client}
specifications.GreetSpecification(t, driver)

package go_specs_greet

import (
    "fmt"
    "net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world")
}

package main

import (
    "net/http"

    go_specs_greet "github.com/quii/go-specs-greet"
)

func main() {
    handler := http.HandlerFunc(go_specs_greet.Handler)
    http.ListenAndServe(":8080", handler)
}

func Handler(w http.ResponseWriter, r *http.Request) {
    name := r.URL.Query().Get("name")
    fmt.Fprint(w, Greet(name))
}

package go_specs_greet

import "fmt"

func Greet(name string) string {
    return fmt.Sprintf("Hello, %s", name)
}

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

func TestGreeterServer(t *testing.T) {
    var (
        port   = "50051"
        driver = grpcserver.Driver{Addr: fmt.Sprintf("localhost:%s", port)}
    )

    adapters.StartDockerServer(t, port, "grpcserver")
    specifications.GreetSpecification(t, &driver)
}

if testing.Short() {
    t.Skip()
}
