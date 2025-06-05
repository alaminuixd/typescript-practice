"use strict";
/* 
TypeScript Special Types "any"
The "any" type basically means, whatever variables has that type can take on any type in the future.
*/

let age: any;
age = "30";
age = 40;
age = true;
age = {};
age = () => {};
age = null;

let u: any = true;
console.log(u);
u = "something";
console.log(u);

interface intPerson {
  name: any;
  father: any;
  isMuslim: any;
}

//
export const obj2: intPerson = {
  name: "Al Amin Khan",
  father: "Syed ahmed Khan",
  isMuslim: true,
};

let anyArr: any[];
anyArr = [1, 2, "three", true, [1, "two", 3], () => {}];

let numArr: number[];
numArr = [1, 2, 3];

let strArr: string[] = ["one", "two", "three"];
console.log(strArr);

let obj: [number, string, number];
obj = [10, "twenty", 30];
console.log(obj);

// anytime function
function anyF(items: any[]) {
  let total: number = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i];
  }
  console.log(total);
}

anyF([10, 20, 30, 40, 50]);
