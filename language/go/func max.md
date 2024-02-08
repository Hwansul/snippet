#### func max

```go
func max[T cmp.Ordered](x T, y ...T) T
```

The max built-in function returns the largest value of a fixed number of
arguments of cmp.Ordered types. There must be at least one argument. If
T is a floating-point type and any of the arguments are NaNs, max will
return NaN.

