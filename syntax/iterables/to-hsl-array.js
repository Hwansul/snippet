const toHSLArray = hslStr => hslStr.match(/\d+/g).map(Number);

toHSLArray('hsl(50, 10%, 10%)'); // [50, 10, 10]
