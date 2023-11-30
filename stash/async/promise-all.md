# Promise.all()

The `Promise.all()` method accepts an array of promises. It doesn’t resolve itself until all of the promises in the array resolve. If one of them fails, it rejects.

This is useful when you have two or more APIs, and need data from both to continue.

```js
Promise.all([
 fetch('https://jsonplaceholder.typicode.com/posts'),
 fetch('https://jsonplaceholder.typicode.com/users')
]).then(function (responses) {
 // Get a JSON object from each of the responses
 return Promise.all(responses.map(function (response) {
  return response.json();
 }));
}).then(function (data) {
 // You would do something with both sets of data here
 // data[0] is the /posts endpoint
 // data[1] is the /users endpoint
 console.log(data);
}).catch(function (error) {
 // if there's an error, log it
 console.log(error);
});
```
