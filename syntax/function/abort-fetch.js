// Create the AbortController
const controller = new AbortController();
const { signal } = controller;

// Perform the request
fetch('https://my.site.com/data', { signal }).then(res => console.log(res));

// Abort the request
controller.abort();
