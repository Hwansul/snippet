/* Other, non-Node related, CI tips */

/**
 * ✅Do
 * This post is focused on testing advice that is related to, or at least can be exemplified with Node JS.
 * This bullet, however, groups few non - Node related tips that are well - known
 * 
 * 1. Use a declarative syntax. 
 *    This is the only option for most vendors but older versions of Jenkins allows using code or UI
 * 2. Opt for a vendor that has native Docker support
 * 3. Fail early, run your fastest tests first. 
 *    Create a ‘Smoke testing’ step/milestone that groups multiple fast inspections 
 *    (e.g. linting, unit tests) and provide snappy feedback to the code committer
 * 4. Make it easy to skim-through all build artifacts including test reports, coverage reports, mutation reports, logs, etc
 * 5. Create multiple pipelines/jobs for each event, reuse steps between them. 
 *    For example, configure a job for feature branch commits and a different one for master PR. 
 *    Let each reuse logic using shared steps (most vendors provide some mechanism for code reuse)
 * 6. Never embed secrets in a job declaration, grab them from a secret store or from the job’s configuration
 * 7. Explicitly bump version in a release build or at least ensure the developer did so
 * 8. Build only once and perform all the inspections over the single build artifact (e.g. Docker image)
 * 9. Test in an ephemeral environment that doesn’t drift state between builds. Caching node_modules might be the only exception
 */

/**
 * ❌Otherwise
 * You‘ll miss years of wisdom
 */