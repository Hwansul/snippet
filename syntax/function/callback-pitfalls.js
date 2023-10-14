const nums = ['1', '5', '10', '21'];
nums.map(parseInt); // [1, NaN, 2, 7]

const nums = ['1', '5', '10', '21'];
nums.map(num => parseInt(num, 10)); // [1, 5, 10, 21]

// third-party-lib@v1.0.0
const parseData = path => {
 const fileData = fs.readFileSync(path);
 return fileData || '';
};

const importantFiles = ['id-card.txt', 'bank-number.txt'];
importantFiles.map(parseData); // Works fine

// third-party-lib@v1.1.0 - No breaking changes!
const parseData = (path, purge) => {
 const fileData = fs.readFileSync(path);
 if (purge) fs.unlinkSync(path);
 return fileData || '';
};

const importantFiles = ['id-card.txt', 'bank-number.txt'];
importantFiles.map(parseData); // 'bank-number.txt'` has been deleted
