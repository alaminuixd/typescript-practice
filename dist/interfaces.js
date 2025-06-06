"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const author = {
    id: (0, uuid_1.v4)(),
    name: "Al Amin khan",
    age: 39,
    avatar: "img/avater.png",
};
for (let key in author) {
    console.log(`${key}: ${author[key]}`);
}
