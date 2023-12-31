/* Don’t catch errors, expect them */

/**
 * ✅Do
 * When trying to assert that some input triggers an error, it might look right to use try-catch-finally and asserts that the catch clause was entered.
 * The result is an awkward and verbose test case (example below) that hides the simple test intent and the result expectations
 * 
 * A more elegant alternative is the using the one-line dedicated Chai assertion: expect(method).to.throw(or in Jest: expect(method).toThrow()).
 * It’s absolutely mandatory to also ensure the exception contains a property that tells the error type, otherwise given just a generic error the application won’t be able to do much rather than show a disappointing message to the user
 */

/**
 * ❌ Otherwise
 * It will be challenging to infer from the test reports(e.g.CI reports) what went wrong
 */

it("When no product name, it throws error 400", async () => {
  let errorWeExceptFor = null;
  try {
    const result = await addNewProduct({});
  } catch (error) {
    expect(error.code).to.equal("InvalidInput");
    errorWeExceptFor = error;
  }
  expect(errorWeExceptFor).not.to.be.null;
  //if this assertion fails, the tests results/reports will only show
  //that some value is null, there won't be a word about a missing Exception
});

it("When no product name, it throws error 400", async () => {
  await expect(addNewProduct({}))
    .to.eventually.throw(AppError)
    .with.property("code", "InvalidInput");
});
