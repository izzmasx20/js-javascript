// MATH OBJECT
// Math
// constant PI
console.log(Math.PI);


// methods
// pow, min, max, round,ceil, floor, trunc, random


//power-
console.log(Math.pow(3,2)); //exponential
console.log(Math.min(23,4,2,-98)); // manimum number of a set
console.log(Math.max(-23, -4, -2, -98));// maximum number of set

// round, ceil, floor, trunc
console.log(Math.round(7.55)); // normal rounding off numbers
console.log(Math.ceil(91.2)); //  round up
console.log(Math.floor(9.99)); // round down
console.log(Math.trunc(10.23)); // removes the dp

// random ->randome number between zero 0 and 1
console.log(Math.random());
// 0- 10
console.log(Math.trunc(Math.trunc() *11));
// 1- 10


// 1-20
const randomnum= Math.floor(Math.random() * 20)+1;
console.log(Math.random());


// 0 - 5
const customers = ["ola", "blessing","pious","moshood","season","samuel"]

// pick a random luck winner
const randomLuckyNumber = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyNumber]);

const min = 5;
const max = 10;


const rNum = Math.floor(Math.random()* (max - min + 1)) + min;
console.log(rNum);













