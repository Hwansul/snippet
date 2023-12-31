/* Constantly inspect for vulnerable dependencies */

/**
 * ✅Do
 * Even the most reputable dependencies such as Express have known vulnerabilities.
 * 
 * This can get easily tamed using community tools such as 
 * [npm audit](https://docs.npmjs.com/getting-started/running-a-security-audit), or commercial tools like [snyk](https://snyk.io/) (offer also a free community version). 
 * 
 * Both can be invoked from your CI on every build
 */

/**
 * ❌Otherwise
 * Keeping your code clean from vulnerabilities without dedicated tools 
 * will require to constantly follow online publications about new threats.Quite tedious
 */

```
npm audit
```