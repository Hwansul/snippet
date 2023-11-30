/* environment.js */
export const key = 'this-is-a-secret';

/* index.js */
import { key } from 'environment';

/* environment.js */
const environment = {
  key: 'this-is-a-secret',
  port: 8000
};

export default environment;
/* index.js */
import environment from 'environment';

const { key, port } = environment;

/* environment.js */
export const envType = 'DEV';

const environment = {
  key: 'this-is-a-secret',
  port: 8000
};

export default environment;

/* index.js */
import { envType }, environment from 'environment';

const { key, port } = environment;

/* environment.js */
const key = 'this-is-a-secret';
const port = 8000;

export {
  key,
  port
};

/* index.js */
import { key, port } from 'environment';

/* environment.js */
const key = 'this-is-a-secret';

export { key as authKey };

/* index.js */
import { authKey } from 'environment';

/* environment.js */
export const key = 'this-is-a-secret';

/* index.js */
import { key as authKey } from 'environment';

/* environment.js */
export const envType = 'DEV';

const environment = {
  key: 'this-is-a-secret',
  port: 8000
};

export default environment;

/* index.js */
import * as env from 'environment';

const { default: { key, port}, envType } = environment;
