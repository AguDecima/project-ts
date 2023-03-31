"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// routes
app.get('/user', (req, res) => {
    res.send({
        id: 38652010,
        name: 'Agustin',
        surname: 'Decima'
    }).json();
});
app.get('/login', (req, res) => {
    res.send({
        token: 'aqui esta tu token'
    }).json();
});
// run server
app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
