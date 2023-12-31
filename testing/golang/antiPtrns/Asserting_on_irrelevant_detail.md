## Asserting on irrelevant detail

An example of this is making an assertion on a complex object, when in practice all you care about in the test is the value of one of the fields.

```go
// not this, now your test is tightly coupled to the whole object
if !cmp.Equal(complexObject, want) {
	t.Error("got %+v, want %+v", complexObject, want)
}

// be specific, and loosen the coupling
got := complexObject.fieldYouCareAboutForThisTest
if got != want {
	t.Error("got %q, want %q", got, want)
}
```

Additional assertions not only make your test more difficult to read by creating 'noise' in your documentation, but also needlessly couples the test with data it doesn't care about. This means if you happen to change the fields for your object, or the way they behave you may get unexpected compilation problems or failures with your tests.

This is an example of not following the red stage strictly enough.

- Letting an existing design influence how you write your test **rather than thinking of the desired behaviour**
- Not giving enough consideration to the failing test's error message

