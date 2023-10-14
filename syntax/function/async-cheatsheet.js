// Resolving with a value, rejecting with an error
new Promise((resolve, reject) => {
  performOperation((err, val) => {
    if (err) reject(err);
    else resolve(val);
  });
});

// Resolving without value, no need for reject
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

promisedOperation()
  .then(
    val => value + 1,   // Called once the promise is fulfilled
    err => {            // Called if the promise is rejected
      if (err === someKnownErr) return defaultVal;
      else throw err;
    }
  )
  .catch(
    err => console.log(err); // Called if the promise is rejected
  )
  .finally(
    () => console.log('Done'); // Called once any outcome is available
  );

Promise
  .all([ p1, p2, p3 ])
  .then(([ v1, v2, v3 ]) => {
    // Values always correspond to the order of promises,
    // not the order they resolved in (i.e. v1 corresponds to p1)
  });

Promise
  .race([ p1, p2, p3 ])
  .then(val => {
    // val will take the value of the first resolved promise
  });

async () => {
  try {
    let val = await promisedValue();
    // Do stuff here
  } catch (err) {
    // Handle error
  }
}
