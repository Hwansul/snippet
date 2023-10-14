const removeWhitespace = str => str.replace(/\s+/g, '');

removeWhitespace('Lorem ipsum.\n Dolor sit amet. ');
// 'Loremipsum.Dolorsitamet.'
