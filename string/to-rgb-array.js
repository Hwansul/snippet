const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);

toRGBArray('rgb(255, 12, 0)'); // [255, 12, 0]
