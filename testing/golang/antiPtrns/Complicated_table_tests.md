## Complicated table tests

Table tests are a great way of exercising a number of different scenarios when the test setup is the same, and you only wish to vary the inputs.

_But_ they can be messy to read and understand when you try to shoehorn other kinds of tests under the name of having one, glorious table.

```go
cases := []struct {
	X                int
	Y                int
	Z                int
	err              error
	IsFullMoon       bool
	IsLeapYear       bool
	AtWarWithEurasia bool
}{}
```

**Don't be afraid to break out of your table and write new tests** rather than adding new fields and booleans to the table `struct`.

A thing to bear in mind when writing software is,

> [Simple is not easy](https://www.infoq.com/presentations/Simple-Made-Easy/)

"Just" adding a field to a table might be easy, but it can make things far from simple.

