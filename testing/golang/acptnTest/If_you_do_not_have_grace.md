## If you do not have grace

Depending on the nature of your software, if you ignore `SIGTERM`, you can run into problems.

Our specific problem was with in-flight HTTP requests. When an automated test was exercising our API, if k8s decided to stop the pod, the server would die, the test would not get a response from the server, and the test will fail.

This would trigger an alert in our incidents channel which requires a dev to stop what they're doing and address the problem. These intermittent failures are an annoying distraction for our team.

These problems are not unique to our tests. If a user sends a request to your system and the process gets terminated mid-flight, they'll likely be greeted with a 5xx HTTP error, not the kind of user experience you want to deliver.

