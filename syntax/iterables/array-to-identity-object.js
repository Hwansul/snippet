const toIdentityObject = arr => Object.fromEntries(arr.map(v => [v, v]));

toIdentityObject(['a', 'b']); // { a: 'a', b: 'b' }
