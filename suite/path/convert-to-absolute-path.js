const untildify = str =>
  str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);

untildify('~/node'); // '/Users/aUser/node'
