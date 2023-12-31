/* Include 3 parts in each test name */

/**
 * ✅Do 
 * A test report should tell whether the current application revision satisfies the requirements 
 * for the people who are not necessarily familiar with the code: 
 * the tester, the DevOps engineer who is deploying and the future you two years from now.
 * This can be achieved best if the tests speak at the requirements level and include 3 parts: 
 * 
 * (1) What is being tested? For example, the ProductsService.addNewProduct method
 * (2) Under what circumstances and scenario? For example, no price is passed to the method
 * (3) What is the expected result? For example, the new product is not approved
 */

/**
 * ❌ Otherwise
 * A deployment just failed, a test named “Add product” failed. 
 * Does this tell you what exactly is malfunctioning?
 */

//1. unit under test
describe('Products Service', function () {
  describe('Add new product', function () {
    //2. scenario and 3. expectation
    it('When no price is specified, then the product status is pending approval', () => {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
