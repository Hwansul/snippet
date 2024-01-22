// IIFE
(function (message) {
  console.log(message);
})('Hello World');
// LOGS: 'Hello World'

// Equivalent code using named function
function logMessage(message) {
  console.log(message);
}

logMessage('Hello World'); // LOGS: 'Hello World'

// All of these are equivalent, leading semicolon is optional
;(() => console.log('Hello'))();
;(function(){ console.log('Hello'); })();
;(function(){ console.log('Hello'); })();
;(function(){ console.log('Hello'); }());
