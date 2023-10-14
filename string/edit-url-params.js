const urlString = 'https://mysite.com?p=42&from=home#details';
const url = new URL(urlString);

// Delete a parameter
const removedParam = 'from';
url.searchParams.delete(removedParam);

// Edit/add parameters
const newParams = {
  p: 57,
  track: 'none'
};
Object.keys(newParams).forEach(key => {
  url.searchParams.set(key, newParams[key]);
});

// Edit the hash fragment
const newHash = 'new';
url.hash = newHash;

console.log(`${url}`); // https://mysite.com?p=57&track=none#new
