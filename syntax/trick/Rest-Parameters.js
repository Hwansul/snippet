/**
 * Define rest parameters
 * by creating a parameter prefixed with ...
 * Any arguments provided at or beyond the rest parameter on a function
 * get combined into an array that’s assigned to the rest parameter’s name.
 * In the example below, ...moreArgs is a rest parameter.
 */

function logStuff(arg1, arg2, ...moreArgs) {
  // Logs arg1
  console.log(arg1);

  // Logs arg2
  console.log(arg2);

  // Logs an array of any other arguments you pass in after arg2
  console.log(moreArgs);
}

// In this example...
// arg1 = 'chicken'
// arg2 = 'tuna'
// moreArgs = ['chips', 'cookie', 'soda', 'delicious']
logStuff("chicken", "tuna", "chips", "cookie", "soda", "delicious");
