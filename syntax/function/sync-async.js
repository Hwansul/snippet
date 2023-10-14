console.log('One');
console.log('Two');
console.log('Three');
// LOGS: 'One', 'Two', 'Three'

console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
// LOGS: 'One', 'Three', 'Two'
