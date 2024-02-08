#### func close

```go
func close(c chan<- Type)
```

The close built-in function closes a channel, which must be either
bidirectional or send-only. It should be executed only by the sender,
never the receiver, and has the effect of shutting down the channel
after the last sent value is received. After the last value has been
received from a closed channel c, any receive from c will succeed
without blocking, returning the zero value for the channel element. The
form

```go
x, ok := <-c
```

will also set ok to false for a closed and empty channel.

