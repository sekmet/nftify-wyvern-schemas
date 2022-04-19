// To help typescript find the type

import { mainSchemas } from './main/index';
import { rinkebySchemas } from './rinkeby/index';
import { harmonytestnetSchemas } from './harmonytestnet/index';

export const schemas = {
  harmonytestnet: harmonytestnetSchemas,
  rinkeby: rinkebySchemas,
  main: mainSchemas,
};
