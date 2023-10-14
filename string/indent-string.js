const indentString = (str, count, indent = ' ') =>
  str.replace(/^/gm, indent.repeat(count));

indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
