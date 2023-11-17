const flags = arr => arr.reduce((acc, str) => ({...acc, [str]: true }), {});

flags(['red', 'green']); // { red: true, green: true }
