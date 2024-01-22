const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');

compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
