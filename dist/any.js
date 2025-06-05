"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj2 = void 0;
/*
TypeScript Special Types "any"
The "any" type basically means, whatever variables has that type can take on any type in the future.
*/
let age;
age = "30";
age = 40;
age = true;
age = {};
age = () => { };
age = null;
let u = true;
console.log(u);
u = "something";
console.log(u);
//
exports.obj2 = {
    name: "Al Amin Khan",
    father: "Syed ahmed Khan",
    isMuslim: true,
};
let anyArr;
anyArr = [1, 2, "three", true, [1, "two", 3], () => { }];
let numArr;
numArr = [1, 2, 3];
let strArr = ["one", "two", "three"];
console.log(strArr);
let obj;
obj = [10, "twenty", 30];
console.log(obj);
// anytime function
function anyF(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    console.log(total);
}
anyF([10, 20, 30, 40, 50]);
