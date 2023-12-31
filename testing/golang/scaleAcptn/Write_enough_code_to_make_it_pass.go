import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    handler := http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
        fmt.Fprint(w, "Hello, world")
    })
    if err := http.ListenAndServe(":8080", handler); err != nil {
        log.Fatal(err)
    }
}

import (
    "fmt"
    "net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s", r.URL.Query().Get("name"))
}

package grpcserver

import (
    "context"

    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials/insecure"
)

type Driver struct {
    Addr string
}

func (d Driver) Greet(name string) (string, error) {
    //todo: we shouldn't redial every time we call greet, refactor out when we're green
    conn, err := grpc.Dial(d.Addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
    if err != nil {
        return "", err
    }
    defer conn.Close()

    client := NewGreeterClient(conn)
    greeting, err := client.Greet(context.Background(), &GreetRequest{
        Name: name,
    })
    if err != nil {
        return "", err
    }

    return greeting.Message, nil
}

package main

import (
    "context"
    "log"
    "net"

    "github.com/quii/go-specs-greet/adapters/grpcserver"
    "google.golang.org/grpc"
)

func main() {
    lis, err := net.Listen("tcp", ":50051")
    if err != nil {
        log.Fatal(err)
    }
    s := grpc.NewServer()
    grpcserver.RegisterGreeterServer(s, &GreetServer{})

    if err := s.Serve(lis); err != nil {
        log.Fatal(err)
    }
}

type GreetServer struct {
    grpcserver.UnimplementedGreeterServer
}

func (g GreetServer) Greet(ctx context.Context, request *grpcserver.GreetRequest) (*grpcserver.GreetReply, error) {
    return &grpcserver.GreetReply{Message: "fixme"}, nil
}

// GreeterServer is the server API for Greeter service.
// All implementations must embed UnimplementedGreeterServer
// for forward compatibility
type GreeterServer interface {
    Greet(context.Context, *GreetRequest) (*GreetReply, error)
    mustEmbedUnimplementedGreeterServer()
}

type GreetServer struct {
    grpcserver.UnimplementedGreeterServer
}

func (g GreetServer) Greet(ctx context.Context, request *grpcserver.GreetRequest) (*grpcserver.GreetReply, error) {
    return &grpcserver.GreetReply{Message: interactions.Greet(request.Name)}, nil
}

func (d *Driver) Curse(name string) (string, error) {
    client, err := d.getClient()
    if err != nil {
        return "", err
    }

    greeting, err := client.Curse(context.Background(), &GreetRequest{
        Name: name,
    })
    if err != nil {
        return "", err
    }

    return greeting.Message, nil
}

package grpcserver

import (
    "context"
    "fmt"

    "github.com/quii/go-specs-greet/domain/interactions"
)

type GreetServer struct {
    UnimplementedGreeterServer
}

func (g GreetServer) Curse(ctx context.Context, request *GreetRequest) (*GreetReply, error) {
    return &GreetReply{Message: fmt.Sprintf("Go to hell, %s!", request.Name)}, nil
}

func (g GreetServer) Greet(ctx context.Context, request *GreetRequest) (*GreetReply, error) {
    return &GreetReply{Message: interactions.Greet(request.Name)}, nil
}
