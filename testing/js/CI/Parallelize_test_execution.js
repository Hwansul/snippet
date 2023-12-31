/* Parallelize test execution */

/**
 * ✅Do
 * When done right, testing is your 24 / 7 friend providing almost instant feedback.
 *
 * In practice, executing 500 CPU - bounded unit test on a single thread can take too long.
 * Luckily, modern test runners and CI platforms(like[Jest](https://github.com/facebook/jest), [AVA](https://github.com/avajs/ava) and [Mocha extensions](https://github.com/yandex/mocha-parallel-tests))
 * can parallelize the test into multiple processes and achieve significant improvement in feedback time.
 *
 * Some CI vendors do also parallelize tests across containers (!) which shortens the feedback loop even further.
 * Whether locally over multiple processes, or over some cloud CLI using multiple machines — parallelizing demand keeping the tests autonomous as each might run on different processes
 */

/**
 * ❌ Otherwise
 *
 * Getting test results 1 hour long after pushing new code,
 * as you already code the next features, is a great recipe for making testing less relevant
 */

// To see an example image for this, visit the website
