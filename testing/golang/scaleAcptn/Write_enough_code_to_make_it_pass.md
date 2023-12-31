## Write enough code to make it pass

Update the handler to behave how our specification wants it to

```go
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
```

## Write enough code to make it pass

Extract the `name` from the request and greet.

```go
import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %s", r.URL.Query().Get("name"))
}
```

The test should now pass.

## Write enough code to make it pass

### gRPC

If you're unfamiliar with gRPC, I'd start by looking at the [gRPC website](https://grpc.io). Still, for this chapter, it's just another kind of adapter into our system, a way for other systems to call (**r**emote **p**rocedure **c**all) our excellent domain code.

The twist is you define a "service definition" using Protocol Buffers. You then generate server and client code from the definition. This not only works for Go but for most mainstream languages too. This means you can share a definition with other teams in your company who may not even write Go and can still do service-to-service communication smoothly.

If you haven't used gRPC before, you'll need to install a **Protocol buffer compiler** and some **Go plugins**. [The gRPC website has clear instructions on how to do this](https://grpc.io/docs/languages/go/quickstart/).

Inside the same folder as our new driver, add a `greet.proto` file with the following

```protobuf
syntax = "proto3";

option go_package = "github.com/quii/adapters/grpcserver";

package grpcserver;

service Greeter {
  rpc Greet (GreetRequest) returns (GreetReply) {}
}

message GreetRequest {
  string name = 1;
}

message GreetReply {
  string message = 1;
}
```

To understand this definition, you don't need to be an expert in Protocol Buffers. We define a service with a Greet method and then describe the incoming and outgoing message types.

Inside `adapters/grpcserver` run the following to generate the client and server code

```
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    greet.proto
```

If it worked, we would have some code generated for us to use. Let's start by using the generated client code inside our `Driver`.

```go
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
```

Now that we have a client, we need to update our `main.go` to create a server. Remember, at this point; we're just trying to get our test to pass and not worrying about code quality.

```go
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
```

To create our gRPC server, we have to implement the interface it generated for us

```go
// GreeterServer is the server API for Greeter service.
// All implementations must embed UnimplementedGreeterServer
// for forward compatibility
type GreeterServer interface {
	Greet(context.Context, *GreetRequest) (*GreetReply, error)
	mustEmbedUnimplementedGreeterServer()
}
```

Our `main` function:

- Listens on a port
- Creates a `GreetServer` that implements the interface, and then registers it with `grpcServer.RegisterGreeterServer`, along with a `grpc.Server`.
- Uses the server with the listener

It wouldn't be a massive extra effort to call our domain code inside `greetServer.Greet` rather than hard-coding `fix-me` in the message, but I'd like to run our acceptance test first to see if everything is working on a transport level and verify the failing test output.

```
greet.go:16: Expected values to be equal:
-fixme
\ No newline at end of file
+Hello, Mike
\ No newline at end of file
```

Nice! We can see our driver is able to connect to our gRPC server in the test.

Now, call our domain code inside our `GreetServer`

```go
type GreetServer struct {
	grpcserver.UnimplementedGreeterServer
}

func (g GreetServer) Greet(ctx context.Context, request *grpcserver.GreetRequest) (*grpcserver.GreetReply, error) {
	return &grpcserver.GreetReply{Message: interactions.Greet(request.Name)}, nil
}
```

Finally, it passes! We have an acceptance test that proves our gRPC greet server behaves how we'd like.

## Write enough code to make it pass

We'll need to update our protocol buffer specification have a `Curse` method on it, and then regenerate our code.

```protobuf
service Greeter {
  rpc Greet (GreetRequest) returns (GreetReply) {}
  rpc Curse (GreetRequest) returns (GreetReply) {}
}
```

You could argue that reusing the types `GreetRequest` and `GreetReply` is inappropriate coupling, but we can deal with that in the refactoring stage. As I keep stressing, we're just trying to get the test passing, so we verify the software works, _then_ we can make it nice.

Re-generate our code with (inside `adapters/grpcserver`).

```
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    greet.proto
```

### Update driver

Now the client code has been updated, we can now call `Curse` in our `Driver`

```go
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
```

### Update server

Finally, we need to add the `Curse` method to our `Server`

```go
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
```

The tests should now pass.

