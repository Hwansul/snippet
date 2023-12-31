## Anatomy of good acceptance tests

If we want acceptance tests that only change when we change behaviour and not implementation detail, it stands to reason that we need to separate those concerns.

### On types of complexity

As software engineers, we have to deal with two kinds of complexity.

- **Accidental complexity** is the complexity we have to deal with because we're working with computers, stuff like networks, disks, APIs, etc.

- **Essential complexity** is sometimes referred to as "domain logic". It's the particular rules and truths within your domain.
  - For example, "if an account owner withdraws more money than is available, they are overdrawn". This statement says nothing about computers; this statement was true before computers were even used in banks!

Essential complexity should be expressible to a non-technical person, and it's valuable to have modelled it in our "domain" code, and in our acceptance tests.

### Separation of concerns

What Dave Farley proposed in the video earlier, and what Riya and I also discussed, is we should have the idea of **specifications**. Specifications describe the behaviour of the system we want without being coupled with accidental complexity or implementation detail.

This idea should feel reasonable to you. In production code, we frequently strive to separate concerns and decouple units of work. Would you not hesitate to introduce an `interface` to allow your `HTTP` handler to decouple it from non-HTTP concerns? Let's take this same line of thinking for our acceptance tests.

Dave Farley describes a specific structure.

![Dave Farley on Acceptance Tests](https://i.imgur.com/nPwpihG.png)

At GopherconUK, Riya and I put this in Go terms.

![Separation of concerns](https://i.imgur.com/qdY4RJe.png)

### Testing on steroids

Decoupling how the specification is executed allows us to reuse it in different scenarios. We can:

#### Make our drivers configurable

This means you can run your ATs locally, in your staging and (ideally) production environments.
- Too many teams engineer their systems such that acceptance tests are impossible to run locally. This introduces an intolerably slow feedback loop. Wouldn't you rather be confident your ATs will pass _before_ integrating your code? If the tests start breaking, is it acceptable that you'd be unable to reproduce the failure locally and instead, have to commit changes and cross your fingers that it'll pass 20 minutes later in a different environment?
- Remember, just because your tests pass in staging doesn't mean your system will work. Dev/Prod parity is, at best, a white lie. [I test in prod](https://increment.com/testing/i-test-in-production/).
- There are always differences between the environments that can affect the *behaviour* of your system. A CDN could have some cache headers incorrectly set; a downstream service you depend on may behave differently; a configuration value may be incorrect. But wouldn't it be nice if you could run your specifications in prod to catch these problems quickly?

#### Plug in _different_ drivers to test other parts of your system

This flexibility allows us to test behaviours at different abstraction and architectural layers, which allows us to have more focused tests beyond black-box tests.
- For instance, you may have a web page with an API behind it. Why not use the same specification to test both? You can use a headless web browser for the web page, and HTTP calls for the API.
- Taking this idea further, ideally, we want the **code to model essential complexity** (as "domain" code) so we should also be able to use our specifications for unit tests. This will give swift feedback that the essential complexity in our system is modelled and behaves correctly.


### Acceptance tests changing for the right reasons

With this approach, the only reason for your specifications to change is if the behaviour of the system changes, which is reasonable.

- If your HTTP API has to change, you have one obvious place to update it, the driver.
- If your markup changes, again, update the specific driver.

As your system grows, you'll find yourself reusing drivers for multiple tests, which again means if implementation detail changes, you only have to update one, usually obvious place.

When done right, this approach gives us flexibility in our implementation detail and stability in our specifications. Importantly, it provides a simple and obvious structure for managing change, which becomes essential as a system and its team grows.

### Acceptance tests as a method for software development

In our talk, Riya and I discussed acceptance tests and their relation to BDD. We talked about how starting your work by trying to _understand the problem you're trying to solve_ and expressing it as a specification helps focus your intent and is a great way to start your work.

I was first introduced to this way of working in GOOS. A while ago, I summarised the ideas on my blog. Here is an extract from my post [Why TDD](https://quii.dev/The_Why_of_TDD)

---

TDD is focused on letting you design for the behaviour you precisely need, iteratively. When starting a new area, you must identify a key, necessary behaviour and aggressively cut scope.

Follow a "top-down" approach, starting with an acceptance test (AT) that exercises the behaviour from the outside. This will act as a north-star for your efforts. All you should be focused on is making that test pass. This test will likely be failing for a while whilst you develop enough code to make it pass.

![](https://i.imgur.com/pxTaYu4.png)

Once your AT is set up, you can break into the TDD process to drive out enough units to make the AT pass. The trick is to not worry too much about design at this point; get enough code to make the AT pass because you're still learning and exploring the problem.

Taking this first step is often more extensive than you think, setting up web servers, routing, configuration, etc., which is why keeping the scope of the work small is essential. We want to make that first positive step on our blank canvas and have it backed by a passing AT so we can continue to iterate quickly and safely.

![](https://i.imgur.com/t5y5opw.png)

As you develop, listen to your tests, and they should give you signals to help you push your design in a better direction but, again, anchored to the behaviour rather than our imagination.

Typically, your first "unit" that does the hard work to make the AT pass will grow too big to be comfortable, even for this small amount of behaviour. This is when you can start thinking about how to break the problem down and introduce new collaborators.

![](https://i.imgur.com/UYqd7Cq.png)

This is where test doubles (e.g. fakes, mocks) are handy because most of the complexity that lives internally within software doesn't usually reside in implementation detail but "between" the units and how they interact.

#### The perils of bottom-up

This is a "top-down" approach rather than a "bottom-up". Bottom-up has its uses, but it carries an element of risk. By building "services" and code without it being integrated into your application quickly and without verifying a high-level test, **you risk wasting lots of effort on unvalidated ideas**.

This is a crucial property of the acceptance-test-driven approach, using tests to get real validation of our code.

Too many times, I've encountered engineers who have made a chunk of code, in isolation, bottom-up, they think is going to solve a job, but it:

- Doesn't work how we want to
- Does stuff we don't need
- Doesn't integrate easily
- Requires a ton of re-writing anyway

This is waste.

