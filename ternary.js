// ternary operators
// is another way of writing if else statement

let otpsent = 4587;
let otpEntered = 4578;

if(otpEntered === otpsent){
    console.log('transaction completed');
    
} else{
    console.log('wrong OTP, try again');
    
}

// ternary operator
// condition  ? first action : second action

otpEntered  === otpsent ? console.log('transaction succesful') : console.log('wrong OTP');


// using ternary operator

let num = 41
num % 2 === 0 ? console.log('EVEN NUMBER') : console.log('ODD NUMBER');


let balance = 6000;
let amount = 8000;

balance >= amount ? console.log('succesful') : console.log('unsuccesful');


const ismarried = false;

// he is married or he is not married
const statement = `He ${ ismarried ? 'he' : "is not"} married`; 
console.log(statement);






