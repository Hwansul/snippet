## Tests and feedback loops

When we wrote the `gracefulshutdown` package, we had unit tests to prove it behaves correctly which gave us the confidence to aggressively refactor. However, we still didn't feel "confident" that it **really** worked.

We added a `cmd` package and made a real program to use the package we were writing. We'd manually fire it up, fire off an HTTP request to it, and then send a `SIGTERM` to see what would happen.

**The engineer in you should be feeling uncomfortable with manual testing**.
It's boring, it doesn't scale, it's inaccurate, and it's wasteful. If you're writing a package you intend to share, but also want to keep it simple and cheap to change, manual testing is not going to cut it.

