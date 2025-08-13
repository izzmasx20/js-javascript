// type conversion - converting a datatype of another data type

// const first = prompt('Enter First Number:');
// const second = prompt('Enter Second Number');
// const total = first + second;



// console.log(first, second);
// console.log(total);

const first = '10'
const second = '10'
const total = Number(first) + Number(second);
console.log(total);


//  convert from string to number - '45.90'- (45.90)
// parseInt, Number
const mystr = '92'
console.log(typeof mystr);

// const converted = perseInt(mystr);
const converted = Number (mystr);
console.log(typeof converted);


// converting numbers to string
const myNum = 76;
console.log(typeof myNum);

// string
const converted2 = String(myNum);
console.log(typeof converted2);

// type COERCTION
const a = '5';
const b = '3';

console.log(a+b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a - b - b + b * 2);

