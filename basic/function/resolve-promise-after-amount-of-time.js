const resolveAfter = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => resolve(value, delay));
  });

resolveAfter('Hello', 1000);
// Returns a promise that resolves to 'Hello' after 1s
