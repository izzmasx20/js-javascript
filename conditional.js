// CONDITIONAL STATEMENT
// If statement

console.log("conditional statement");
// if (condition){
//action
//line of code}

if (1 < 2) {
  console.log("ola");
}

let balance = 6000;
let amount = 2000;

if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is " + balance);

  // determine if thr password is long enough (>= 10)
  // improve your logic check if the password contains '#' - good password
  const password = "#password123445";

  if (password.length >= 10 && password.includes("#")) {
    console.log("password is good enough");
  }
}
// log to the console if a users age is eligible to vote
const age = 12;
if (age >= 18) {
  console.log("you are eligible to vote");
}

if (9 > 7) {
  console.log("yes");
} else {
  console.log("no");
}

if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is " + balance);
} else {
  console.log("Insufficient Funds");
}
// write and if else statement to check if a number is a positive or not
const num = 10;
if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

// write an if else statement to ndetermine if a number is odd or even

if (num % 2 === 0) {
  console.log("Evenn Number");
} else {
  console.log("Odd number");
}

// multiple else if
// overpop[ulated >= 300 , underpopulated <= 50 and balance population > 50 and < 3oo
const cencusResult = 500;

if (cencusResult >= 500) {
  console.log("overpopulated");
} else if (cencusResult <= 50) {
  console.log("under populated");
} else {
  console.log("balanced population");
}

// lovery system for a company a b c(winner) d
const useerchoice = "a";

if (useerchoice === "c") {
  console.log("congratulation");
} else {
  console.log("try again");
}

// lottery system for a company 4 choices a (trip to dubai) b(try again) c(car) d(blender)
const useerchoiceb = "a";
if (useerchoiceb === "a") {
  console.log("trip to dubai");
} else if (useerchoiceb === "c") {
  console.log("car");
} else if (useerchoiceb === "d") {
  console.log("blender");
} else {
  console.log("try again");
}

const Age = 78;
if (Age >= 40) {
  console.log(" ELDERLY PERSON");
} else if (Age >= 18) {
  console.log("YOUNG ADULT");
} else {
  console.log("TEENAGER");
}

const rating = 7.8;
if (rating >= 8) {
  console.log("green");
} else if (rating >= 5) {
  console.log("orange");
} else {
  console.log("red");
}

let burnley = 3
let sunderland = 2

if (burnley > sunderland){
    console.log(' burnly winner');
} else if (sunderland > burnley){
    console.log('sunderland wins');
}else {
    console.log(' its a draw');
    
}

let Burnley = 3
let Sunderland= 3
const totalGoals = burnley + sunderland

if ( burnley === sunderland && totalGoals >4){
    console.log('you won the bet');
    
} else{
    console.log('you lose');
    
}

if (sunderland > burnley || totalGoals >2 ){
    console.log(' ola wins');
    
}else{
    console.log('ola lot');
    
}
//  samuel sunderland or burnley wins more than 2 goals
if ((sunderland> burnley || sunderland > sunderland) && totalGoals >2 ){
    console.log('you won');
    
}else {
    console.log('you lost');
    
}
// liverpool and man city
const liverpool = 2;
const mancity = 5;
const liverpoolcorner = 4;
const mancitycorner = 5;
const totalCorners = liverpoolcorner + mancity;

//  liverpool wins (liver > mancity) and liverpool scores less than 4 (liver <4)
// and total corners is 9 (liC + manC ===9)