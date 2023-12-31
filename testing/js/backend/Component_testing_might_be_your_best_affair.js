/* Component testing might be your best affair */

/**
 * ✅Do
 * Each unit test covers a tiny portion of the application and it’s expensive to cover the whole,  * whereas end - to - end testing easily covers a lot of ground 
 * but is flaky and slower, why not apply a balanced approach and write tests that are bigger than unit tests but smaller than end - to - end testing ? 
 * Component testing is the unsung song of the testing world — they provide the best of both worlds: 
 * reasonable performance and a possibility to apply TDD patterns + realistic and great coverage.
 * 
 * Component tests focus on the Microservice ‘unit’, they work against the API and don’t mock anything which belongs to the Microservice itself(e.g.real DB, or at least the in -memory version of that DB) but stub anything that is external like calls to other Microservices.By doing so, we test what we deploy, approach the app from outward to inward and gain great confidence in a reasonable amount of time.
 * [We have a full guide that is solely dedicated to writing component tests in the right way](https://github.com/testjavascript/nodejs-integration-tests-best-practices)
 */

/**
 * ❌ Otherwise
 * You may spend long days on writing unit tests to find out that you got only 20 % system coverage
 */

describe("Order API", () => {
  it("Scenario: vaild new order, expect: returns positive status", async () => {
    //setup: stub externals, boost internals
    const expressApp = express();
    nock('http://localhost')
      .get('/product/ISBN-8001')
      .reply(200, {
        _id: 'ISBN-8001', price: 2
      });
    require('.db/config').dialect = 'sqlite3';

    //senario and expectation
    const req = await superTestAPI(expressApp)
      .post('/api/orders')
      .send({
        customer: "Johny", product: "ISBN-8001", price: 2
      });
  })
})
