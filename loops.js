// loops
// iterations
// loop must terminate
// for - while, do-while loop
// are used to perform repitive tasks

// infinite LOOP
// for (initializer; condition; increment(terminate)){
//  action * 6
//   }
// 012345

for (let i = 0; i < 5; i++) {
  console.log("in a loop");
}

for (let attempt = 0; attempt < 3; attempt++) {
  console.log("keep trying");
}

// sum of natural numbers between 0 and 100

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// while loop
let y = 0;
while (y < 3) {
  // action
  console.log("attempt card");

  y++;
}

// do while loop
// perform an action at least once whether the condition is true or false

let x = 5;
do {
  console.log("Hello User");
  x++;
} while (x < 2);


// rolling a dice until 6 appears
let roll;
do{
    roll = Math.floor(Math.random() * 6) +1;
    console.log(`you rolled ${roll}`);
    
}while (roll !== 6);



