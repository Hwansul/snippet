#### func recover

```go
func recover() any
```

The recover built-in function allows a program to manage behavior of a
panicking goroutine. Executing a call to recover inside a deferred
function (but not any function called by it) stops the panicking
sequence by restoring normal execution and retrieves the error value
passed to the call of panic. If recover is called outside the deferred
function it will not stop a panicking sequence. In this case, or when
the goroutine is not panicking, or if the argument supplied to panic was
nil, recover returns nil. Thus the return value from recover reports
whether the goroutine is panicking.

