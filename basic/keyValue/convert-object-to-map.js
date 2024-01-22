const objectToMap = obj => new Map(Object.entries(obj));

objectToMap({a: 1, b: 2}); // Map {'a' => 1, 'b' => 2}
