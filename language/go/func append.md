#### func append

```go
func append(slice []Type, elems ...Type) []Type
```

The append built-in function appends elements to the end of a slice. If
it has sufficient capacity, the destination is resliced to accommodate
the new elements. If it does not, a new underlying array will be
allocated. Append returns the updated slice. It is therefore necessary
to store the result of append, often in the variable holding the slice
itself:

```go
slice = append(slice, elem1, elem2)
slice = append(slice, anotherSlice...)
```

As a special case, it is legal to append a string to a byte slice, like
this:

```go
slice = append([]byte("hello "), "world"...)
```

