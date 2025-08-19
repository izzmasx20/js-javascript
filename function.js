// javascript function
// reuseable blocks of code that perform a specific task or return a value
// call or invoke the function

// a function that welcomes our user when they log in

function welcomeUser() {
  console.log("welcome User");
}
// calling a  function
welcomeUser();
welcomeUser();

// functions with parameters - values that are passed to functions
function welcomeUser2(user) {
  console.log(`welcome ${user}`);
}

welcomeUser2("season");
welcomeUser2("daniel");
welcomeUser2("ola");

// default parameters
function welcomeUser3(user = "anonymous") {
  console.log(`welcome ${user}`);
}
welcomeUser3();

// functions returning a value - giving back a result
// return keyword
// function that return the addition of two numbers
function add(a, b) {
  return a + b;
}
let sum = add(10, 12);
console.log(sum);

// func that return the product (*) of two numbers

function product(num1, num2) {
  return num1 * num2;
}
console.log(product(67, 3));

// fuctions that returns the naira equivalent of a doller amount passed
// 1$ = 1600
// **** (10 doller will give you (10 * 1600) naira)

function convertToNaira(dollarAmount) {
  return `${dollarAmount} dollars  will give you ${dollarAmount * 1600} Naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));

// write a function that returns the average of three numbers
function calcAverage(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  return avg;
}

console.log(calcAverage(3, 5, 7));

//  write a function that calculates and return the age of user, your function should take in year of birth as a parameter

function userAge(yearOfBirth) {
  return 2025 - yearOfBirth;
}

console.log(userAge(2000));

// write a fuction that returns if a number is even or odd
function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is EVEN`;
  } else {
    return `${num} is ODD`;
  }
}

console.log(oddOrEven(90));
console.log(oddOrEven(71));

//  write a function to check if a withdraw is possible or not

let balance = 2000;
function withdrawAmount(amount) {
  if (balance >= amount) {
    balance -= amount;
    return "transaction succesful";
  } else {
    return "insufficient funds";
  }
}
console.log(withdrawAmount(1800));
console.log(balance);
console.log(withdrawAmount(1000));
//  write a function called depositAmount  that performs the fumction of deposit and returns the balance of thr user after the deposit
function depositAmount(amount) {
  balance + amount;
  return `deposit of ${amount} is succesful, and your current balance is ${balance}`;
}

console.log(depositAmount(4000));
console.log(withdrawAmount(1000));

// return keyword
// anycode after return is inaccessible code

function example() {
  console.log("okay after return");
  return "hello";
  // unreachable code
}

example();

//  Cat ---> C, john ---> j
function getFirstLetter(word) {
  return word.charAt(0);
}
console.log(getFirstLetter("Igwe"));

// Write a function that returns the full name of a user if provided with the first and last name e.g 'ola' 'John' ---> ola john
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Ola", "John"));

//

function longeststring(word1, word2) {
  if (word1.length > word2.length) {
    return word1;
  } else if (word2.length > word1.length) {
    return word2;
  } else {
    return "SAME length";
  }
}
console.log(longeststring("ate", "me"));

// function declaration
function sayHello1() {
  return "Hello";
}
const sayHello = function () {
  return "Hello";
};

//function declaration,

//  function expression treats function like variable
// function exp that return the square of a num

const squareNumber = function (num) {
  return num ** 2;
};
console.log(squareNumber(7));

//  function exp that converts number of days to weeks 21
const daysToWeeks = function (days) {
  return days / 7;
};

// arrow function (modern)
// arrow function that returns the difference between two nums

const difference2 = (n1, n2) => {
  const diff = n1 - n2;
  return diff;
};

// shorten arrow functions (only a line inside of the block of code)
const difference = (n1, n2) => n1 - n2;
console.log(difference(9, 6));

// hoisting - behaviour in JS where function declarations are move to the top before the code is executed
hoistedFunc(); // this is working because of hoisting
function hoistedFunc() {
  console.log("i am a func dec");
}

// write an arrow func that gets the maximum of two numbers
const maximum = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return "equal number";
  }
};

console.log(maximum(9, 78));

//  write a javaScript arrow function that accepts a string a string as a parameter
// returns the string in all capital letters
const capitalizeWord = (word) => word.toUpperCase();
console.log(capitalizeWord('js is fun'));

// write a function called checkLoanEligibility,
// which receieves an amount as a parameter and returns
// whether a user is eligible or not base on the criterion
// the loan amount can not be more than twice the amount of savings 

let savings = 2000
const checkLoanEligibility = (amount)=> amount > savings * 2 ? 'ineligible' : 'Eligible'
    
// write a javascript arrow function called containSubstring that takes two parameters:
// str - the main string
// substr - the substring you want to check for.
// the function should return true if substr is found inside str , and false otherwise.
// hello, el - world, dl


const containSubstring = ( str, substr)=> str.includes(substr);
console.log(containSubstring('hello', 'ell'));


// write an arrow function that converts minutes to seconds
// and returns the seconds equivalent

const converTosecs = (minutes) => minutes * 60; 



