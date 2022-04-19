// To help typescript find the type

import { mainTokens } from './main/index';
import { rinkebyTokens } from './rinkeby/index';
import { harmonytestnetTokens } from './harmonytestnet/index';

export const tokens = {
  harmonytestnet: harmonytestnetTokens,
  rinkeby: rinkebyTokens,
  main: mainTokens,
};
