#### type comparable

comparable is an interface that is implemented by all comparable types
(booleans, numbers, strings, pointers, channels, arrays of comparable
types, structs whose fields are all comparable types). The comparable
interface may only be used as a type parameter constraint, not as the
type of a variable.

```go
type comparable interface{ comparable }
```

