#### func complex

```go
func complex(r, i FloatType) ComplexType
```

The complex built-in function constructs a complex value from two
floating-point values. The real and imaginary parts must be of the same
size, either float32 or float64 (or assignable to them), and the return
value will be the corresponding complex type (complex64 for float32,
complex128 for float64).

