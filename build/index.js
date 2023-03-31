"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// body parser
app.use(body_parser_1.default.json()); // to support JSON-encoded bodies
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// routes
app.use('/v1', user_1.router);
// run server
app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
