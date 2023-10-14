const frozen = Object.freeze({ username: 'johnsmith' });
const sealed = Object.seal({ username: 'johnsmith' });

frozen.name = 'John Smith';  // frozen = { username: 'johnsmith' }
sealed.name = 'John Smith';  // sealed = { username: 'johnsmith' }

delete frozen.username;      // frozen = { username: 'johnsmith' }
delete sealed.username;      // sealed = { username: 'johnsmith' }

frozen.username = 'jsmith';  // frozen = { username: 'johnsmith' }
sealed.username = 'jsmith';  // sealed = { username: 'jsmith' }
