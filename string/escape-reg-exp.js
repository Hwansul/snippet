const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

escapeRegExp('(test)'); // \\(test\\)
