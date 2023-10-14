const head = arr => (arr && arr.length ? arr[0] : undefined);

head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
