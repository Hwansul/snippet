## Acceptance tests

If you’ve read the rest of this book, you will have mostly written "unit tests". Unit tests are a fantastic tool for enabling fearless refactoring, driving good modular design, preventing regressions, and facilitating fast feedback.

By their nature, they only test small parts of your system. Usually, unit
tests alone are *not enough* for an effective testing strategy. Remember, we want our systems to **always be shippable**. We can't rely on manual testing, so we need another kind of testing: **acceptance tests**.

### What are they?

Acceptance tests are a kind of "black-box test". They are sometimes referred
to as "functional tests". They should exercise the system as a user of the system would.

The term "black-box" refers to the idea that the test code has no access to the internals of the system, it can only use its public interface and make assertions on the behaviours it observes. This means they can only test the system as a whole.

This is an advantageous trait because it means the tests exercise the system the same as a user would, it can't use any special workarounds that could make a test pass, but not actually prove what you need to prove. This is similar to the principle of preferring your unit test files to live inside a separate test package, for example, `package mypkg_test` rather than `package mypkg`.

### Benefits of acceptance tests

- When they pass, you know your entire system behaves how you want it to.
- They are more accurate, quicker, and require less effort than manual testing.
- When written well, they act as accurate, verified documentation of your
  system. It doesn't fall into the trap of documentation that diverges from the real behaviour of the system.
- No mocking! It's all real.

### Potential drawbacks vs unit tests

- They are expensive to write.
- They take longer to run.
- They are dependent on the design of the system.
- When they fail, they typically don't give you a root cause, and can be
  difficult to debug.
- They don't give you feedback on the internal quality of your system. You
  could write total garbage and still make an acceptance test pass.
- Not all scenarios are practical to exercise due to the black-box nature.

For this reason, it is foolish to only rely on acceptance tests. They do not have many of the qualities unit tests have, and a system with a large number of acceptance tests will tend to suffer in terms of maintenance costs and poor lead time.

#### Lead time?

Lead time refers to how long it takes from a commit being merged into your
main branch to it being deployed in production. This number can vary from weeks and even months for some teams to a matter of minutes. Again, at `$WORK`, we value DORA's findings and want to keep our lead time to under 10 minutes.

A balanced testing approach is required for a reliable system with excellent
lead time, and this is usually described in terms of the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).

