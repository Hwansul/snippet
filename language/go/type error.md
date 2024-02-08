#### type error

The error built-in interface type is the conventional interface for
representing an error condition, with the nil value representing no
error.

```go
type error interface {
    Error() string
}
```

