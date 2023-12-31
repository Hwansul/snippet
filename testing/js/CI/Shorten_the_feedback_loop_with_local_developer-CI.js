/* Shorten the feedback loop with local developer-CI */

/**
 * ✅Do
 * Using a CI with shiny quality inspections like testing, linting, vulnerabilities check, etc ? 
 * Help developers run this pipeline also locally to solicit instant feedback and shorten the[feedback loop](https://www.gocd.org/2016/03/15/are-you-ready-for-continuous-delivery-part-2-feedback-loops/). 
 * Why? an efficient testing process constitutes many and iterative loops: (1) try-outs -> (2) feedback -> (3) refactor. The faster the feedback is, the more improvement iterations a developer can perform per-module and perfect the results. On the flip, when the feedback is late to come fewer improvement iterations could be packed into a single day, the team might already move forward to another topic/task/module and might not be up for refining that module.
 * 
 * Practically, some CI vendors(Example: [CircleCI local CLI](https://circleci.com/docs/2.0/local-cli/)) allow running the pipeline locally. 
 * Some commercial tools like [wallaby provide highly-valuable & testing insights](https://wallabyjs.com/) as a developer prototype (no affiliation). 
 * Alternatively, you may just add npm script to package.json that runs all the quality commands (e.g. test, lint, vulnerabilities)
 *  — use tools like [concurrently](https://www.npmjs.com/package/concurrently) for parallelization and non-zero exit code if one of the tools failed. 
 * Now the developer should just invoke one command — e.g. ‘npm run quality’ — to get instant feedback. 
 *
 *  Consider also aborting a commit if the quality check failed using a githook ([husky can help](https://github.com/typicode/husky))
 */

/**
 * ❌ Otherwise
 * When the quality results arrive the day after the code, testing doesn’t become a fluent part of development rather an after the fact formal artifact
 */


