"use strict";
// the following array will only have strings values
let strArr;
strArr = ["one", "two", "three", "four"];
console.log(strArr);
// the following array will only have number values
let numArr;
numArr = [1, 2, 3, 4, 5];
console.log(numArr);
// the following array will have number and string
let numStr;
numStr = ["1", 2, 3, 4, "five"];
console.log(numStr);
// the following will let you assign any one of the two type.
// you can either have only number or only string
let anyOne;
anyOne = 10;
//anyOne = [1, 2, 3, 4]; : this is not valid as first one is just number not array
anyOne = ["one", "2", "3"]; // this one is valid
// Assign mixed array values
let mixed;
mixed = [1, 2, "three", true];
console.log(mixed);
// Assign mixed array values using "any"
let mixed2;
mixed2 = [1, 2, "three", true];
console.log(mixed2);
// mixed obj
const names = ["khan", "kazi", "hawlader", "dafadar"];
const age = [23, 32, 10, 34];
names.push("mollah");
console.log(names);
const obj1 = {
    "father name": "Syed Ahmed Khan",
    "mother name": "Mamataz Begum",
    "son name": "Abrar Syed Khan",
    "daugher name": "Arshiya Amin",
};
for (let key in obj1) {
    console.log(`${key}: ${obj1[key]}`);
}
console.log(`My father name is ${obj1["father name"]}`);
const fruites = ["mango", 34, "apple", { name: "fruites" }, true, "grapes"];
fruites.push("local");
fruites.push({ varity: "Him Shagor" });
fruites.push({ origin: "Bangladeshi" });
console.log(fruites[2]);
let f = fruites[2];
console.log(`The single fruit's name is ${f}`);
const mixedThings = [
    200,
    "one",
    () => "hello",
    {},
];
console.log(mixedThings[2]);
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
// specify types more explicitly
const mixedArr = [
    200,
    "one",
    [2, 3, 4],
    () => "hello",
    true,
];
const possibleFunc = mixedArr[3];
if (typeof possibleFunc === "function") {
    console.log(possibleFunc());
}
