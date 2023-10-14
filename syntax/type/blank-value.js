const isFalsy = value => !value;

isFalsy(null); // true
isFalsy(undefined); // true
isFalsy(0); // true
isFalsy(false); // true
isFalsy(''); // true
isFalsy(NaN); // true

const isEmptyCollection = value =>
  (Array.isArray(value) || value === Object(value)) &&
  !Object.keys(value).length;

isEmptyCollection([]); // true
isEmptyCollection({}); // true

const isWhitespaceString = value =>
  typeof value === 'string' && /^\s*$/.test(value);

isWhitespaceString(' '); // true
isWhitespaceString('\t\n\r'); // true

const isInvalidDate = value =>
  value instanceof Date && Number.isNaN(value.getTime());
const isEmptySet = value => value instanceof Set && value.size === 0;
const isEmptyMap = value => value instanceof Map && value.size === 0;

isInvalidDate(new Date('hello')); // true
isEmptySet(new Set()); // true
isEmptyMap(new Map()); // true

const isFalsy = value => !value;
const isWhitespaceString = value =>
  typeof value === 'string' && /^\s*$/.test(value);
const isEmptyCollection = value =>
  (Array.isArray(value) || value === Object(value)) &&
  !Object.keys(value).length;
const isInvalidDate = value =>
  value instanceof Date && Number.isNaN(value.getTime());
const isEmptySet = value => value instanceof Set && value.size === 0;
const isEmptyMap = value => value instanceof Map && value.size === 0;

const isBlank = value => {
  if (isFalsy(value)) return true;
  if (isWhitespaceString(value)) return true;
  if (isEmptyCollection(value)) return true;
  if (isInvalidDate(value)) return true;
  if (isEmptySet(value)) return true;
  if (isEmptyMap(value)) return true;
  return false;
};

isBlank(null); // true
isBlank(undefined); // true
isBlank(0); // true
isBlank(false); // true
isBlank(''); // true
isBlank(' \r\n '); // true
isBlank(NaN); // true
isBlank([]); // true
isBlank({}); // true
isBlank(new Date('hello')); // true
isBlank(new Set()); // true
isBlank(new Map()); // true
