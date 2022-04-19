"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.harmonytestnetSchemas = void 0;
const index_1 = require("../ContractRole/index");
const ERC1155_1 = require("../ERC1155");
const ERC20_1 = require("../ERC20");
const index_2 = require("../ERC721/index");
const index_3 = require("./harmonytestnetCryptoKitties/index");
const index_4 = require("./harmonytestnetCustom/index");
const index_5 = require("./harmonytestnetENSName/index");
const index_6 = require("./harmonytestnetENSShortNameAuction/index");
const index_7 = require("./harmonytestnetOwnableContract/index");
const index_8 = require("./testHarmonytestnetNFT/index");
exports.harmonytestnetSchemas = [
    index_3.harmonytestnetCryptoKittiesSchema,
    index_4.harmonytestnetCustomSchema,
    index_5.harmonytestnetENSNameSchema,
    index_6.harmonytestnetENSShortNameAuctionSchema,
    index_7.harmonytestnetOwnableContractSchema,
    index_8.testHarmonytestnetNFTSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    index_2.ERC721v3Schema,
    ERC1155_1.ERC1155Schema,
    index_1.ContractRoleSchema,
];
//# sourceMappingURL=index.js.map