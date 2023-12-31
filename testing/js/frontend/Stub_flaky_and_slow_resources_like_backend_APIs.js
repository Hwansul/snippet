/* Stub flaky and slow resources like backend APIs */

/**
 * ✅Do
 *
 * When coding your mainstream tests (not E2E tests), 
 * avoid involving any resource that is beyond your responsibility and control like backend API and use stubs instead (i.e. test double). 
 * 
 * Practically, instead of real network calls to APIs, use some test double library 
 * (like [Sinon](https://sinonjs.org/), [Test doubles](https://www.npmjs.com/package/testdouble), etc) for stubbing the API response.
 * 
 * The main benefit is preventing flakiness - testing or staging APIs by definition are not highly stable and from time to time will fail your tests although YOUR component behaves just fine (production env was not meant for testing and it usually throttles requests). 
 *
 *  Doing this will allow simulating various API behavior that should drive your component behavior as when no data was found or the case when API throws an error. 
 * Last but not least, network calls will greatly slow down the tests
 */

/**
 * ❌ Otherwise
 * 
 * The average test runs no longer than few ms, a typical API call last 100ms>, 
 * this makes each test ~20x slower
 */

// ✅Doing It Right Example: 
// Stubbing or intercepting API calls

// unit under test
export default function ProductsList() {
  const [products, setProducts] = useState(false);

  const fetchProducts = async () => {
    const products = await axios.get("api/products");
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products ? <div>{products}</div> : <div data-test-id="no-products-message">No products</div>;
}

// test
test("When no products exist, show the appropriate message", () => {
  // Arrange
  nock("api")
    .get(`/products`)
    .reply(404);

  // Act
  const { getByTestId } = render(<ProductsList />);

  // Assert
  expect(getByTestId("no-products-message")).toBeTruthy();
});
