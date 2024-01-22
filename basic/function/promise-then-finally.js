new Promise((resolve, reject) => resolve(10))
  .then(x => {
    console.log(x); // 10
    return x + 1;
  })
  .finally(x => {
    console.log(x); // undefined
    return x + 2;
  });
// Promise resolves to 11, the return value of then()

new Promise((resolve, reject) => reject(0))
  .catch(x => {
    console.log(x); // 0
    throw x;
  })
  .then(x => {
    console.log(x); // Will not run
  })
  .finally(() => {
    console.log('clean up'); // 'clean up'
  });
// Uncaught (in promise) 0
