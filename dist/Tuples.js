"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
exports.person = [
    "one",
    23,
    true,
    { name: "khan" },
];
console.log(exports.person);
function useGPS() {
    let lant = 345;
    let lat = 435;
    return [lant, lat];
}
console.log(useGPS());
let user;
user = ["Al Amin Khan", 34, true];
console.log(user[2]);
const [a, b, c] = user;
console.log(a);
