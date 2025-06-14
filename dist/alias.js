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
const car1 = {
    name: "Mazda Xsores",
    origin: "Japan",
    brand: "Mazda",
    model: 2025,
    mileage: "25 kph",
};
function driveCar(obj) {
    return `I brought a ${obj.name} of origin ${obj.origin} from ${obj.brand} brand that's model is ${obj.model}. The Car can go ${obj.mileage} with one liter of octen`;
}
console.log(driveCar(car1));
const tree1 = {
    name: "Mehogony",
    height: "20 / 30 feet",
    uses: ["Furniture", "Medicine", "Boat Making"],
    origin: "United Kingdom",
    type: "Tropical plant",
};
function treeFunc1(obj) {
    const { name, height, uses, origin, type } = obj;
    return `The tree name is ${name} that can grow ${height}. It has many different uses like ${uses.slice(0, -1)} and ${uses.slice(-1)}`;
}
console.log(treeFunc1(tree1));
