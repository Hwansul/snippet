#### func cap

```go
func cap(v Type) int
```

The cap built-in function returns the capacity of v, according to its
type:

```go
Array: the number of elements in v (same as len(v)).
Pointer to array: the number of elements in *v (same as len(v)).
Slice: the maximum length the slice can reach when resliced;
if v is nil, cap(v) is zero.
Channel: the channel buffer capacity, in units of elements;
if v is nil, cap(v) is zero.
```

For some arguments, such as a simple array expression, the result can be
a constant. See the Go language specification\'s \"Length and capacity\"
section for details.

