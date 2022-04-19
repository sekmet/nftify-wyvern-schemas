import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';

import { rinkebyCryptoKittiesSchema } from './rinkebyCryptoKitties/index';
import { rinkebyCustomSchema } from './rinkebyCustom/index';
import { rinkebyENSNameSchema } from './rinkebyENSName/index';
import { rinkebyENSShortNameAuctionSchema } from './rinkebyENSShortNameAuction/index';
import { rinkebyOwnableContractSchema } from './rinkebyOwnableContract/index';
import { testRinkebyNFTSchema } from './testRinkebyNFT/index';

export const rinkebySchemas: Array<Schema<any>> = [
  rinkebyCryptoKittiesSchema,
  rinkebyCustomSchema,
  rinkebyENSNameSchema,
  rinkebyENSShortNameAuctionSchema,
  rinkebyOwnableContractSchema,
  testRinkebyNFTSchema,
  ERC20Schema,
  ERC721Schema,
  ERC721v3Schema,
  ERC1155Schema,
  ContractRoleSchema,
];
