/**
 * Optional chaining is a !browser-native way! to chain methods or properties,
 * and conditionally continue down the chain
 * only if the value is not null or undefined.
 * To use optional chaining, add a question mark (?) before the dot (.) in your chain.
 */

// returns "Abracadabra!"
let summonOptional = wizard?.spells?.summon?.phrase;

// returns undefined but does not throw an error
let teacupsOptional = wizard?.spells?.teacup?.phrase;
