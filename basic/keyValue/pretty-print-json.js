const obj = {
  id: 1182,
  username: 'johnsmith',
  active: true,
  emails: ['johnsmith@mysite.com', 'contact@johnsmi.th'],
};

JSON.stringify(obj, null, 2);
// {
//   "id": 1182,
//   "username": "johnsmith",
//   "active": true,
//   "emails": [
//     "johnsmith@mysite.com"
//     "contact@johnsmi.th"
//   ]
// }

const obj = {
  id: 1182,
  username: 'johnsmith',
  active: true,
  emails: ['johnsmith@mysite.com', 'contact@johnsmi.th'],
};

const replacer = (key, value) => {
  if (key === 'id') return value.toString(16);
  if (key === 'username') return `@${value}`;
  if (key === 'emails') return `${value[0]} +${value.length - 1} more`;
  return value;
};

JSON.stringify(obj, replacer, 2);
// {
//   "id": "0x4e2",
//   "username": "@johnsmith",
//   "active": true,
//   "emails": "johnsmith@mysite.com +1 more"
// }
