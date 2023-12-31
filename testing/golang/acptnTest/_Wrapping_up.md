## Wrapping up

In this blog post, we introduced acceptance tests into your testing tool belt. They are invaluable when you start to build real systems and are an important complement to your unit tests.

The nature of *how* to write acceptance tests depends on the system you're building, but the principles stay the same. Treat your system like a "black box". If you're making a website, your tests should act like a user, so you'll want to use a headless web browser like [Selenium](https://www.selenium.dev/), to click on links, fill in forms, etc. For a RESTful API, you'll send HTTP requests using a client.

### Taking it further for more complicated systems

Non-trivial systems don't tend to be single-process applications like the one we've discussed. Typically, you'll depend on other systems such as a database. For these scenarios, you'll need to automate a local environment to test with. Tools like [docker-compose](https://docs.docker.com/compose/) are useful for spinning up containers of the environment you need to run your system locally.

### The next chapter

In this post the acceptance test was written retrospectively. However, in [Growing Object-Oriented Software](http://www.growing-object-oriented-software.com) the authors show that we can use acceptance tests in a test-driven approach to act as a "north-star" to guide our efforts.

As systems get more complex, the costs of writing and maintaining acceptance tests can quickly spiral out of control. There are countless stories of development teams being hamstrung by expensive acceptance test suites.

The next chapter will introduce using acceptance test to guide our design
along with principles and techniques for managing the costs of acceptance tests.

### Improving the quality of open-source

If you're writing packages you intend to share, I'd encourage you to create
simple example programs demonstrating what your package does and invest time in having simple-to-follow acceptance tests to give yourself, and potential users of your work, confidence.

Like [Testable Examples](https://go.dev/blog/examples), seeing this little extra effort in developer experience goes a long way toward building trust in your work, and will reduce your own maintenance costs.

