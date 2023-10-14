const decimalToHex = dec => dec.toString(16);

decimalToHex(0); // '0'
decimalToHex(255); // 'ff'

const hexToDecimal = hex => parseInt(hex, 16);

hexToDecimal('0'); // 0
hexToDecimal('ff'); // 255
