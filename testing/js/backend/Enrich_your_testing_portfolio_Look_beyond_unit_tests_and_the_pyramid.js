/* ️2.1 Enrich your testing portfolio: Look beyond unit tests and the pyramid */

/**
 * ✅Do
 * The[testing pyramid](https://martinfowler.com/bliki/TestPyramid.html), though 10> years old, is a great and relevant model that suggests three testing types and influences most developers’ testing strategies.
 * At the same time, more than a handful of shiny new testing techniques emerged and are hiding in the shadows of the testing pyramid.
 * Given all the dramatic changes that we’ve seen in the recent 10 years (Microservices, cloud, serverless), is it even possible that one quite-old model will suit *all* types of applications? shouldn’t the testing world consider welcoming new testing techniques?
 *
 * Don’t get me wrong, in 2019 the testing pyramid, TDD, and unit tests are still a powerful technique and are probably the best match for many applications.Only like any other model, despite its usefulness, [it must be wrong sometimes](https://en.wikipedia.org/wiki/All_models_are_wrong). For example, consider an IoT application that ingests many events into a message-bus like Kafka/RabbitMQ, which then flow into some data-warehouse and are eventually queried by some analytics UI. Should we really spend 50% of our testing budget on writing unit tests for an application that is integration-centric and has almost no logic? As the diversity of application types increases (bots, crypto, Alexa-skills) greater are the chances to find scenarios where the testing pyramid is not the best match.
 *
 * It’s time to enrich your testing portfolio and become familiar with more testing types(the next bullets suggest a few ideas), mind models like the testing pyramid but also match testing types to real - world problems that you’re facing(‘Hey, our API is broken, let’s write consumer - driven contract testing!’), diversify your tests like an investor that builds a portfolio based on risk analysis — assess where problems might arise and match some prevention measures to mitigate those potential risks
 *
 * A word of caution: the TDD argument in the software world takes a typical false - dichotomy face, some preach to use it everywhere, and others think it’s the devil.Everyone who speaks in absolutes is wrong:]
 */

/**
 * ❌ Otherwise
 * You’re going to miss some tools with amazing ROI, some like Fuzz, lint, and mutation can provide value in 10 minutes
 */

/**
Cindy Sridharan suggests a rich testing portfolio in her amazing post ‘Testing Microservices — the same way

Testing Microservice
├── pre-production
│   ├── acceptance.test.js
│   ├── benchmark.test.js
│   ├── component.test.js
│   ├── contract.test.js
│   ├── coverage.test.js
│   ├── functional.test.js
│   ├── fuzz.test.js
│   ├── lint.test.js
│   ├── mutation.test.js
│   ├── penetration.test.js
│   ├── property-based.test.js
│   ├── regression.test.js
│   ├── smoke.test.js
│   ├── static-anaylsis.test.js
│   ├── threat-modelling.do
│   ├── ui-ux.test.js
│   ├── unit.test.js
│   └── usability.test.js
└── testing-in-production
    ├── deploy
    │   ├── config.test.js
    │   ├── integration.test.js
    │   ├── load.test.js
    │   ├── shadowing.test.js
    │   └── tap-compare.test.js
    ├── post-release
    │   ├── a-b-test.do
    │   ├── auditing.do
    │   ├── chaos.test.do
    │   ├── dynamic-exploration.do
    │   ├── logs-events.do
    │   ├── monitoring.do
    │   ├── oncall-experience.do
    │   ├── profiling.do
    │   ├── real-user-monitoring.do
    │   ├── teeing.do
    │   └── tracing.do
    └── release
        ├── canarying.test.js
        ├── exception-tracking.test.js
        ├── feature-flagging.test.js
        ├── monitoring.test.js
        └── traffic.snaping.js
 */

// 😊Example: [YouTube: “Beyond Unit Tests: 5 Shiny Node.JS Test Types (2018)” (Yoni Goldberg)](https://www.youtube.com/watch?v=-2zP494wdUY&feature=youtu.be)