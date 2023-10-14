const isStream = val =>
  val !== null && typeof val === 'object' && typeof val.pipe === 'function';

const fs = require('fs');

isStream(fs.createReadStream('test.txt')); // true
