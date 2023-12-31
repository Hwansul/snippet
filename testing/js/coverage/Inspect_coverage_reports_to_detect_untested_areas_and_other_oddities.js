/* Inspect coverage reports to detect untested areas and other oddities */

/**
 * ✅ Do
 * Some issues sneak just under the radar and are really hard to find using traditional tools.
 * These are not really bugs but more of surprising application behavior that might have a severe impact.
 *
 * For example, often some code areas are never or rarely being invoked
 * — you thought that the ‘PricingCalculator’ class is always setting the product price
 * but it turns out it is actually never invoked although we have 10000 products in DB and many sales…
 *
 * Code coverage reports help you realize whether the application behaves the way you believe it does.
 * Other than that, it can also highlight which types of code is not tested — being informed that 80 % of the code is tested doesn’t tell whether the critical parts are covered.
 *
 * Generating reports is easy — just run your app in production or during testing with coverage tracking and then see colorful reports that highlight how frequent each code area is invoked.
 * If you take your time to glimpse into this data — you might find some gotchas
 */

/**
 * ❌ Otherwise
 * If you don’t know which parts of your code are left un
 * - tested, you don’t know where the issues might come from
 */

// ❌Anti-Pattern Example: 
// What’s wrong with this coverage report?
// To see an example report, please visit the hosted website.