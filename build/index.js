"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const u1 = new user_1.User('agustin', 'decima', 1994);
// u1.name = 'rafael'
console.log(u1.info());
console.log(u1.getAge());
