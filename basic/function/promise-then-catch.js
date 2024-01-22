const myPromise = () => Promise.reject('Oops!');
const logger = data => console.log(data);
const identity = data => data;

myPromise().catch(identity).then(logger); // LOGS: Oops!
myPromise().then(logger).catch(identity); // Nothing is logged
