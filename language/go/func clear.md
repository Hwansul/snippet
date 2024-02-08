#### func clear

```go
func clear[T ~[]Type | ~map[Type]Type1](t T)
```

The clear built-in function clears maps and slices. For maps, clear
deletes all entries, resulting in an empty map. For slices, clear sets
all elements up to the length of the slice to the zero value of the
respective element type. If the argument type is a type parameter, the
type parameter\'s type set must contain only map or slice types, and
clear performs the operation implied by the type argument.

