"use strict";
// following function specify type of data for each argument
function addTwoNum(a, b) {
    return a + b;
}
console.log(20 + 30);
// following function specify type of data for arguments and also type for "return";
function profit(a, b) {
    let sum = a / 100;
    let profit = sum * b;
    return profit;
}
console.log(profit(30000, 5));
function sumAllNumbers(arr) {
    let total = arr.reduce((a, c) => a + c, 0);
    console.log(total);
    return { total, sum: total + 3 };
}
sumAllNumbers([20, 35, 10]);
console.log(sumAllNumbers([20, 35, 10]));
let title;
title = "The title one";
let movieName;
movieName = "Helboy";
console.log(movieName);
