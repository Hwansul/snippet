# async & await

When you use the `async` operator before a `function`, you turn it into an async function.

Inside an async function, you can use the `await` operator before asynchronous code to tell the function to wait for that operation to complete before moving on.

To handle errors, wrap your code in a `try...catch()`.

```js
async function getAPIData () {
 try {
  let request = await fetch('https://jsonplaceholder.typicode.com/posts/');
  if (!request.ok) throw request;
  let response = await request.json();
  console.log(response);
 } catch (err) {
  console.warn(err);
 }
}

getAPIData();
```

Note: an async function always returns a promise, even if you’re not actually making any asynchronous calls in it.
