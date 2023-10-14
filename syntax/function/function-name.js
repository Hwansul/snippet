const functionName = fn => (console.debug(fn.name), fn);

let m = functionName(Math.max)(5, 6);
// max (logged in debug channel of console)
// m = 6
