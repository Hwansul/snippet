const containsWhitespace = str => /\s/.test(str);

containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true
