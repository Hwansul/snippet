## Anatomy of bad acceptance tests

Over many years, I've worked for several companies and teams. Each of them recognised the need for acceptance tests; some way to test a system from a user's point of view and to verify it works how it's intended, but almost without exception, the cost of these tests became a real problem for the team.

- Slow to run
- Brittle
- Flaky
- Expensive to maintain, and seem to make changing the software harder than it ought to be
- Can only run in a particular environment, causing slow and poor feedback loops

Let's say you intend to write an acceptance test around a website you're building. You decide to use a headless web browser (like [Selenium](https://www.selenium.dev)) to simulate a user clicking buttons on your website to verify it does what it needs to do.

Over time, your website's markup has to change as new features are discovered, and engineers bike-shed over whether something should be an `<article>` or a `<section>` for the billionth time.

Even though your team are only making minor changes to the system, barely noticeable to the actual user, you find yourself wasting lots of time updating your ATs.

### Tight-coupling

Think about what prompts acceptance tests to change:

- An external behaviour change. If you want to change what the system does, changing the acceptance test suite seems reasonable, if not desirable.
- An implementation detail change / refactoring. Ideally, this shouldn't prompt a change, or if it does, a minor one.

Too often, though, the latter is the reason acceptance tests have to change. To the point where engineers even become reluctant to change their system because of the perceived effort of updating tests!

![Riya and myself talking about separating concerns in our tests](https://i.imgur.com/bbG6z57.png)

These problems stem from not applying well-established and practised engineering habits written by the authors mentioned above. **You can't write acceptance tests like unit tests**; they require more thought and different practices.

