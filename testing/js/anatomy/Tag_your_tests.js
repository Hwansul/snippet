/* Tag your tests */

/**
 * ✅Do 
 * Different tests must run on different scenarios: quick smoke, IO - less, tests should run when a developer saves or commits a file, full end - to - end tests usually run when a new pull request is submitted, etc.
 * This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset.
 * For example, this is how you would invoke only the sanity test group with Mocha: mocha — grep ‘sanity’
 */

/**
 * ❌ Otherwise
 * Running all the tests, including tests that perform dozens of DB queries, 
 * any time a developer makes a small change can be extremely slow and keeps developers away from running tests
 */

//this test is fast (no DB) and we're tagging it correspondigly
//now the user/CI can run it frequently
describe("Order service", function () {
  describe("Add new order #cold-test #sanity", function () {
    test("Scenario - no currency was supplied. Expectation - Use the default currency #sanity", function () {
      //code logic here
    });
  });
});
