/* Choose the right test doubles: Avoid mocks in favor of stubs and spies */

/**
 * ✅Do
 * Test doubles are a necessary evil because they are coupled to the application internals, yet some provide immense value 
 * [Read here a reminder about test doubles: mocks vs stubs vs spies](https://martinfowler.com/articles/mocksArentStubs.html
 * Before using test doubles, ask a very simple question: Do I use it to test functionality that appears, or could appear, in the requirements document? If not, it’s a white-box testing smell.
 * For example, if you want to test that your app behaves reasonably when the payment service is down, you might stub the payment service and trigger some ‘No Response’ return to ensure that the unit under test returns the right value. This checks our application behavior/response/outcome under certain scenarios. You might also use a spy to assert that an email was sent when that service is down — this is again a behavioral check which is likely to appear in a requirements doc (“Send an email if payment couldn’t be saved”). On the flip side, if you mock the Payment service and ensure that it was called with the right JavaScript types — then your test is focused on internal things that have nothing to do with the application functionality and are likely to change frequently
 */

/**
 * ❌Otherwise
 * Any refactoring of code mandates searching for all the mocks in the code and updating accordingly.
 * Tests become a burden rather than a helpful friend
 */

it("When a valid product is about to be deleted, ensure data access DAL was called once, with the right product and right config", async () => {
  //Assume we already added a product
  const dataAccessMock = sinon.mock(DAL);
  //hmmm BAD: testing the internals is actually our main goal here, not just a side-effect
  dataAccessMock
    .expects("deleteProduct")
    .once()
    .withArgs(DBConfig, theProductWeJustAdded, true, false);
  new ProductService().deletePrice(theProductWeJustAdded);
  dataAccessMock.verify();
});

it("When a valid product is about to be deleted, ensure an email is sent", async () => {
  //Assume we already added here a product
  const spy = sinon.spy(Emailer.prototype, "sendEmail");
  new ProductService().deletePrice(theProductWeJustAdded);
  //hmmm OK: we deal with internals? Yes, but as a side effect of testing the requirements (sending an email)
  expect(spy.calledOnce).to.be.true;
});
