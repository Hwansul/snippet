#### func len

```go
func len(v Type) int
```

The len built-in function returns the length of v, according to its
type:

```go
Array: the number of elements in v.
Pointer to array: the number of elements in *v (even if v is nil).
Slice, or map: the number of elements in v; if v is nil, len(v) is zero.
String: the number of bytes in v.
Channel: the number of elements queued (unread) in the channel buffer;
         if v is nil, len(v) is zero.
```

For some arguments, such as a string literal or a simple array
expression, the result can be a constant. See the Go language
specification\'s \"Length and capacity\" section for details.

