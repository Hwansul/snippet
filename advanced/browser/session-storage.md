# sessionStorage

Use the local storage API to store data locally that the browser can access later. Data is cleared when the browser session ends, and must be a string.

```js
// Store data
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
var tempData = sessionStorage.getItem('myTempDataKey');

// Remove data
sessionStorage.removeItem('myTempDatakey');
```
