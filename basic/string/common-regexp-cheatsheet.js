const regexp = /^abc$/;
// Where 'abc' is the exact string you want to match

const regexp = /^$/;

const regexp = /\s+/g;

const regexp = /\r|\n|\r\n/gm;

const regexp = /[^\w\s]/gi;

const regexp = /^[a-zA-Z0-9-_]+$/;

const regexp = /^[A-Za-z\s]+$/;

const regexp = /^((?!(abc|bcd)).)*$/;
// Where 'abc' and 'bcd' are pattern you want to exclude

const regexp = /\(([^)]+)\)/g;

const regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

const regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

const regexp = /.{1,2}/g;
// Where '2' is the number of characters per chunk
