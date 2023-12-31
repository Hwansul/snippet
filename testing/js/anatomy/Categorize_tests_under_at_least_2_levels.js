/* Categorize tests under at least 2 levels */

/**
 * ✅Do
 * Apply some structure to your test suite so an occasional visitor could easily understand the requirements(tests are the best documentation) and the various scenarios that are being tested.
 * A common method for this is by placing at least 2 'describe' blocks above your tests: 
 * the 1st is for the name of the unit under test and the 2nd for an additional level of categorization like the scenario or custom categories(see code examples and the print screen below).
 * 
 * Doing so will also greatly improve the test reports: The reader will easily infer the test categories, delve into the desired section and correlate failing tests. * In addition, it will get much easier for a developer to navigate through the code of a suite with many tests.
 * There are multiple alternative structures for the test suite that you may consider like[given - when - then](https://github.com/searls/jasmine-given) and [RITE](https://github.com/ericelliott/riteway)
 */

/**
 * ❌ Otherwise
 * When looking at a report with a flat and long list of tests, the reader has to skim - read through long texts to conclude the major scenarios and correlate the commonality of failing tests.
 * Consider the following case: When 7 / 100 tests fail, looking at a flat list will demand reading the text of the failing to see how they relate to each other.
 * However, in a hierarchical report, all of them could be under the same flow or category and the reader will quickly infer what or at least where is the root failure cause
 */

// Unit under test
describe("Transfer service", () => {
  //Scenario
  describe("When no credit", () => {
    //Expectation
    test("Then the response status should decline", () => { });

    //Expectation
    test("Then it should send email to admin", () => { });
  });
});

test("Then the response status should decline", () => { });

test("Then it should send email", () => { });

test("Then there should not be a new transfer record", () => { });
