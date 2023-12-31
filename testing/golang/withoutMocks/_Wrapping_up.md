## Wrapping up

It’s common for software projects to be organised with various teams building systems concurrently to try to reach a common goal.

This method of work requires a high degree of collaboration and communication. Many feel with an "API first" approach, we can define some API contracts (often on a wiki page!) and then work independently for six months and stick it all together. This rarely works well in practice because as we start writing code, we understand the domain and the problem better, which challenges our assumptions. We have to react to these changes in knowledge, which often require cross-team changes.

So, if you're in this situation, you need to structure and test your system optimally to deal with unpredictable changes, both inside and outside of the system you're working on.

> “One of the defining characteristics of high-performing teams in software development is their ability to make progress and to change their minds, without asking for permission from any person or group outside of their small team.”
>
> Modern Software Engineering
> David Farley

Don't rely on weekly meetings or Slack threads to flesh out changes. **Codify your assumptions in contracts**. Run those contracts against the systems in your build pipelines so you get fast feedback if new information comes to light. These contracts, in conjunction with **fakes,** mean you can work independently and manage external changes sustainably.

### Your system as a collection of modules

Referring back to Farley's book, I'm describing the idea of **incrementalism**. Building software is a *constant learning exercise*. Understanding the requirements we must solve for a given system to deliver value up-front is unrealistic. So, we have to optimise our systems and ways of work to **gather feedback quickly and experiment**.

You need a **modular system** to take advantage of the ideas discussed in this chapter. If you have modular code with reliable fakes, it allows you to experiment with your system via automated tests cheaply.

We found it extremely easy to translate weird, hypothetical (but possible) scenarios into self-contained tests to help us understand the problem and drive out more robust software by composing our modules together and trying out different data in different order, with some APIs failing, etc.

Well-defined, well-tested modules allow you to increment your system without changing and understanding _everything_ at once.

### But I'm working on something small with stable APIs

Even with stable APIs, you do not want your developer experience, builds and so on to be tightly coupled to other people’s code. When you get this approach right, you end up with a composable set of modules to piece together your system for production, running locally and writing different kinds of tests with doubles you trust.

It allows you to isolate the parts of your system you're concerned about and write meaningful tests about the real problem you're trying to solve.

### Make your dependencies first-class citizens.

Of course, stubs and spies have their place. Simulating different behaviours of your dependencies ad-hocly in tests will always have its use, but be careful not to let the costs go out of control.

So many times in my career, I have seen carefully written software written by talented devs fall apart due to integration problems. Integration is challenging for engineers _because_ it's hard to reproduce the exact behaviours of a system written by other engineers, who also change it simultaneously.

Some teams rely on everyone deploying to a shared environment and testing there. The problem is this doesn't give you **isolated** feedback, and the **feedback is slow**. You still won't be able to construct different experiments with how your system works with other dependencies, at least not efficiently.

**We have to tame this complexity by adopting more sophisticated ways of modelling our dependencies** to quickly test/experiment on our dev machines before it gets to production. Create realistic and manageable fakes of your dependencies, verified by contracts. Then, you can start writing more meaningful tests and experimenting with your system, making you more likely to succeed.
