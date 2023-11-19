# localStorage

Use the local storage API to store data locally that the browser can access later. Data is stored indefinitely, and must be a string.

```js
// Store data
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);

// Get data
var data = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDatakey');
```
