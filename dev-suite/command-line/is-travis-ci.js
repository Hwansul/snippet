const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;

isTravisCI(); // true (if code is running on Travis CI)
