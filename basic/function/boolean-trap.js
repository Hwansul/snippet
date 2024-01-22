// What does `false` stand for?
results.reload(false);

// What does `true` stand for?
const user = new User(true);

// Real quick: Is this valid or invalid?
input.setInvalid(false);

// It should be obvious that `true` makes the element disabled
element.setProperty('disabled', true);
// Could be equivalent to `element.disabled = true;`

// Ok, so reload but not immediately
results.reload({ immediate: false });

// Create a new user without administrator privileges
const user = new User({ isAdministrator: false });
