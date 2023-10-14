const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = async () => {
  const items = ['a', 'b', 'c'];
  for (item of items) {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  }

  console.log('Items processed');
};

uppercaseItems();
// LOGS: 'A', 'B', 'C', 'Items processed'

const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = () => {
  const items = ['a', 'b', 'c'];
  return Promise.all(
    items.map(async item => {
      const uppercaseItem = await asyncUppercase(item);
      console.log(uppercaseItem);
    })
  ).then(() => {
    console.log('Items processed');
  });
};
// LOGS: 'A', 'C', 'B', 'Items processed'

const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = async () => {
  const items = ['a', 'b', 'c'];
  await items.forEach(async item => {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  });

  console.log('Items processed');
};

uppercaseItems();
// LOGS: ''Items processed', 'B', 'A', 'C'
