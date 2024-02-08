#### func min

```go
func min[T cmp.Ordered](x T, y ...T) T
```

The min built-in function returns the smallest value of a fixed number
of arguments of cmp.Ordered types. There must be at least one argument.
If T is a floating-point type and any of the arguments are NaNs, min
will return NaN.

