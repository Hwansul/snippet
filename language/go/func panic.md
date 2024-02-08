#### func panic

```go
func panic(v any)
```

The panic built-in function stops normal execution of the current
goroutine. When a function F calls panic, normal execution of F stops
immediately. Any functions whose execution was deferred by F are run in
the usual way, and then F returns to its caller. To the caller G, the
invocation of F then behaves like a call to panic, terminating G\'s
execution and running any deferred functions. This continues until all
functions in the executing goroutine have stopped, in reverse order. At
that point, the program is terminated with a non-zero exit code. This
termination sequence is called panicking and can be controlled by the
built-in function recover.

Starting in Go 1.21, calling panic with a nil interface value or an
untyped nil causes a run-time error (a different panic). The GODEBUG
setting panicnil=1 disables the run-time error.

