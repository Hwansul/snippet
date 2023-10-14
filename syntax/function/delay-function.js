const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
