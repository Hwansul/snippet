const startsWithSubstring = (text, word) => {
  for (let i in word) {
    const substr = word.slice(-i - 1);
    if (text.startsWith(substr)) return substr;
  }
  return undefined;
};

startsWithSubstring('/>Lorem ipsum dolor sit amet', '<br />'); // '/>'
