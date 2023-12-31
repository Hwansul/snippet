/* Test many input combinations using Property-based testing */


/**
 * ✅Do
 * Typically we choose a few input samples for each test.
 * Even when the input format resembles real - world data(see bullet[‘Don’t foo’](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F16-dont-foo-use-realistic-input-data)), 
 * we cover only a few input combinations (method(‘’, true, 1), method(“string” , false , 0)), However, in production, an API that is called with 5 parameters can be invoked with thousands of different permutations, one of them might render our process down ([see Fuzz Testing](https://en.wikipedia.org/wiki/Fuzzing)). 
 * What if you could write a single test that sends 1000 permutations of different inputs automatically and catches for which input our code fails to return the right response? Property-based testing is a technique that does exactly that: sending all the possible input combinations to your unit under test it increases the serendipity of finding a bug. 
 * 
 * For example, given a method — addNewProduct(id, name, isDiscount) — the supporting libraries will call this method with many combinations of (number, string, boolean) like (1, “iPhone”, false), (2, “Galaxy”, true). 
 * You can run property-based testing using your favorite test runner (Mocha, Jest, etc) using libraries like [js-verify](https://github.com/jsverify/jsverify) or [testcheck](https://github.com/leebyron/testcheck-js) (much better documentation). 
 * Update: Nicolas Dubien suggests in the comments below to [checkout fast-check](https://github.com/dubzzz/fast-check#readme) which seems to offer some additional features and also to be actively maintained
 */

/**
 * ❌Otherwise
 * Unconsciously, you choose the test inputs that cover only code paths that work well.
 * Unfortunately, this decreases the efficiency of testing as a vehicle to expose bugs
 */

import fc from "fast-check";

describe("Product service", () => {
  describe("Adding new", () => {
    //this will run 100 times with different random properties
    it("Add new product with random yet valid properties, always successful", () =>
      fc.assert(
        fc.property(fc.integer(), fc.string(), (id, name) => {
          expect(addNewProduct(id, name).status).toEqual("approved");
        })
      ));
  });
});
