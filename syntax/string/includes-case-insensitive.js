const includesCaseInsensitive = (str, searchString) =>
  new RegExp(searchString, 'i').test(str);

includesCaseInsensitive('Blue Whale', 'blue'); // true
