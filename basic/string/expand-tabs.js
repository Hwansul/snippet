const expandTabs = (str, count) => str.replace(/\t/g, ' '.repeat(count));

expandTabs('\t\tlorem', 3); // '      lorem'
