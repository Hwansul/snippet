fetch('https://my.api.com/items/1')
  .catch(err => console.log(`Failed with error: ${err}`))
  .then(response => response.json())
  .then(json => console.log(json));
