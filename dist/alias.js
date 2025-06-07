"use strict";
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
const userOne = {
    name: "Al Amin",
    score: 89,
};
function formateUser(user) {
    console.log(`${user.name}: ${user.score}`);
    return userOne;
}
console.log(formateUser(userOne));
formateUser({ name: "Rupu", score: 34 });
