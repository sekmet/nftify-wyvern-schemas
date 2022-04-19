"use strict";
// To help typescript find the type
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./harmonytestnet/index");
exports.schemas = {
    harmonytestnet: index_3.harmonytestnetSchemas,
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
};
//# sourceMappingURL=index.js.map