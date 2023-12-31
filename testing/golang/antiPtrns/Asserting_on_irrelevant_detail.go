// not this, now your test is tightly coupled to the whole object
if !cmp.Equal(complexObject, want) {
    t.Error("got %+v, want %+v", complexObject, want)
}

// be specific, and loosen the coupling
got := complexObject.fieldYouCareAboutForThisTest
if got != want {
    t.Error("got %q, want %q", got, want)
}
