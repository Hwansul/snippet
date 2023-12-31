## When you have grace

What we want to do is listen for `SIGTERM`, and rather than instantly killing the server, we want to:

- Stop listening to any more requests
- Allow any in-flight requests to finish
- *Then* terminate the process
