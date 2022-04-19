import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';

import { harmonytestnetCryptoKittiesSchema } from './harmonytestnetCryptoKitties/index';
import { harmonytestnetCustomSchema } from './harmonytestnetCustom/index';
import { harmonytestnetENSNameSchema } from './harmonytestnetENSName/index';
import { harmonytestnetENSShortNameAuctionSchema } from './harmonytestnetENSShortNameAuction/index';
import { harmonytestnetOwnableContractSchema } from './harmonytestnetOwnableContract/index';
import { testHarmonytestnetNFTSchema } from './testHarmonytestnetNFT/index';

export const harmonytestnetSchemas: Array<Schema<any>> = [
  harmonytestnetCryptoKittiesSchema,
  harmonytestnetCustomSchema,
  harmonytestnetENSNameSchema,
  harmonytestnetENSShortNameAuctionSchema,
  harmonytestnetOwnableContractSchema,
  testHarmonytestnetNFTSchema,
  ERC20Schema,
  ERC721Schema,
  ERC721v3Schema,
  ERC1155Schema,
  ContractRoleSchema,
];
