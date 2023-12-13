const atob = str => Buffer.from(str, 'base64').toString('binary');

atob('Zm9vYmFy'); // 'foobar'
