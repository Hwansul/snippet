## Having tests that won't fail (or, evergreen tests)

It's astonishing how often this comes up. You start debugging or changing some tests and realise: there are no scenarios where this test can fail. Or at least, it won't fail in the way the test is _supposed_ to be protecting against.

This is _next to impossible_ with TDD if you're following **the first step**,

> Write a test, see it fail

This is almost always done when developers write tests _after_ code is written, and/or chasing test coverage rather than creating a useful test suite.

