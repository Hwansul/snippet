## Wrapping up

Building systems with a reasonable cost of change requires you to have ATs engineered to help you, not become a maintenance burden. They can be used as a means of guiding, or as a GOOS says, "growing" your software methodically.

Hopefully, with this example, you can see our application's predictable, structured workflow for driving change and how you could use it for your work.

You can imagine talking to a stakeholder who wants to extend the system you work on in some way. Capture it in a domain-centric, implementation-agnostic way in a specification, and use it as a north star towards your efforts. Riya and I describe leveraging BDD techniques like "Example Mapping" [in our GopherconUK talk](https://www.youtube.com/watch?v=ZMWJCk_0WrY) to help you understand the essential complexity more deeply and allow you to write more detailed and meaningful specifications.

Separating essential and accidental complexity concerns will make your work less ad-hoc and more structured and deliberate; this ensures the resiliency of your acceptance tests and helps them become less of a maintenance burden.

Dave Farley gives an excellent tip:

> Imagine the least technical person that you can think of, who understands the problem-domain, reading your Acceptance Tests. The tests should make sense to that person.

Specifications should then double up as documentation. They should specify clearly how a system should behave. This idea is the principle around tools like [Cucumber](https://cucumber.io), which offers you a DSL for capturing behaviours as code, and then you convert that DSL into system calls, just like we did here.

### What has been covered

- Writing abstract specifications allows you to express the essential complexity of the problem you're solving and remove accidental complexity. This will enable you to reuse the specifications in different contexts.
- How to use [Testcontainers](https://golang.testcontainers.org) to manage the life-cycle of your system for ATs. This allows you to thoroughly test the image you intend to ship on your computer, giving you fast feedback and confidence.
- A brief intro into containerising your application with Docker
- gRPC
- Rather than chasing canned folder structures, you can use your development approach to naturally drive out the structure of your application, based on your own needs

### Further material

- In this example, our "DSL" is not much of a DSL; we just used interfaces to decouple our specification from the real world and allow us to express domain logic cleanly. As your system grows, this level of abstraction might become clumsy and unclear. [Read into the "Screenplay Pattern"](https://cucumber.io/blog/bdd/understanding-screenplay-(part-1)/) if you want to find more ideas as to how to structure your specifications.
- For emphasis, [Growing Object-Oriented Software, Guided by Tests,](http://www.growing-object-oriented-software.com) is a classic. It demonstrates applying this "London style", "top-down" approach to writing software. Anyone who has enjoyed Learn Go with Tests should get much value from reading GOOS.
- [In the example code repository](https://github.com/quii/go-specs-greet), there's more code and ideas I haven't written about here, such as multi-stage docker build, you may wish to check this out.
  - In particular, *for fun*, I made a **third program**, a website with some HTML forms to `Greet` and `Curse`. The `Driver` leverages the excellent-looking [https://github.com/go-rod/rod](https://github.com/go-rod/rod) module, which allows it to work with the website with a browser, just like a user would. Looking at the git history, you can see how I started not using any templating tools "just to make it work" Then, once I passed my acceptance test, I had the freedom to do so without fear of breaking things. -->
