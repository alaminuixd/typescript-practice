"use strict";
/* const colorContainer = document.getElementById("colorContainer");
const btnTheme = document.getElementById("btn-theme"); */
function generateRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = 1;
    return [r, g, b, a];
}
function toString(colors) {
    return `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
}
const user1 = {
    name: "Al Amin",
    age: 34,
};
function printUser(user) {
    console.log(`Name: ${user.name}, age: ${user.age}`);
    return { name: "Ruhul Amin", age: 34 };
}
printUser(user1);
console.log("hello");
