## Violating encapsulation

Encapsulation is very important. There's a reason we don't make everything in a package exported (or public). We want coherent APIs with a small surface area to avoid tight coupling.

People will sometimes be tempted to make a function or method public in order to test something. By doing this you make your design worse and send confusing messages to maintainers and users of your code.

A result of this can be developers trying to debug a test and then eventually realising the function being tested is _only called from tests_. Which is obviously **a terrible outcome, and a waste of time**.

In Go, consider your default position for writing tests as _from the perspective of a consumer of your package_. You can make this a compile-time constraint by having your tests live in a test package e.g `package gocoin_test`. If you do this, you'll only have access to the exported members of the package so it won't be possible to couple yourself to implementation detail.

