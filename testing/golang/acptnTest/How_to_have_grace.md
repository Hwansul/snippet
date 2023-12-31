## How to have grace

Thankfully, Go already has a mechanism for gracefully shutting down a server with [net/http/Server.Shutdown](https://pkg.go.dev/net/http#Server.Shutdown).

> Shutdown gracefully shuts down the server without interrupting any active connections. Shutdown works by first closing all open listeners, then closing all idle connections, and then waiting indefinitely for connections to return to idle and then shut down. If the provided context expires before the shutdown is complete, Shutdown returns the context's error, otherwise it returns any error returned from closing the Server's underlying Listener(s).

To handle `SIGTERM` we can use [os/signal.Notify](https://pkg.go.dev/os/signal#Notify), which will send any incoming signals to a channel we provide.

By using these two features from the standard library, you can listen for `SIGTERM` and shutdown gracefully.

