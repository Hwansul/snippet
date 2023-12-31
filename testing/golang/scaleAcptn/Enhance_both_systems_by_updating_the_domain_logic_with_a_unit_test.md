## Enhance both systems by updating the domain logic with a unit test

As mentioned, not every change to a system should be driven via an acceptance test. Permutations of business rules and edge cases should be simple to drive via a unit test if you have separated concerns well.

Add a unit test to our `Greet` function to default the `name` to `World` if it is empty. You should see how simple this is, and then the business rules are reflected in both applications for "free".

