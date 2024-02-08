#### Constants

true and false are the two untyped boolean values.

```go
const (
    true  = 0 == 0 // Untyped bool.
    false = 0 != 0 // Untyped bool.
)
```

iota is a predeclared identifier representing the untyped integer
ordinal number of the current const specification in a (usually
parenthesized) const declaration. It is zero-indexed.

```go
const iota = 0 // Untyped int.
```

