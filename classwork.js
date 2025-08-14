const teama = 96 + 108 + 89;
const teamb = 88 + 91 + 110;
const avgTeama = teama / 3;
const avgTeamb = teamb / 3;

if (avgTeama > avgTeamb) {
  console.log("avgTeama");
} else if (avgTeamb > avgTeama) {
  console.log("avgTeamb");
} else {
  console.log("draw");
}


const item1 = 120
const item2 =  80
const item3 = 150
let usersAcount = 400

const totalItem = item1 + item2 + item3

if (usersAcount >= totalItem){
    console.log('you can checkout');
    
}else {
    console.log('insufficient balance');
    
}

const movieAgeRating = 18
const userAge = 20

if (userAge >= movieAgeRating){
    console.log('you can watch the movie');
    
}else {
    console.log('you are not old enough to watch the movie');
    
}
userAge >= movieAgeRating ? console.log('you can watch the movie') : console.log('you are not old enough to watch the movie');

let ticketPrice = 150
let discountAmount = 30
let userBalance = 300
const fanClubMember = true
const discountedprice = ticketPrice + discountAmount

if(fanClubMember){
    console.log(`you are paying ${discountedprice}`);
    
}else {
    console.log(`you are paying ${ticketPrice}`);
}

if (fanClubMember && userBalance >= discountedprice || !fanClubMember && userBalance >= ticketPrice){
    console.log('you can buy the football ticket');
    
} else {
    console.log('you do not have enough money');
    
}

const jacketPrice = 250
const discountjacketP = 50
const userAcountB = 300

const finalJacketDisPrice = jacketPrice + discountjacketP

if (userAcountB >= finalJacketDisPrice){
    console.log('YOU CAN BUY THE JACKET');
    
}else {
    console.log('YOU DO NOT HAVE ENOUGH MONEY TO BUY THE JACKET');
    
}
userAcountB >= finalJacketDisPrice
  ? console.log("you can buy the jacket")
  : console.log("YOU DO NOT HAVE ENOUGH MONEY TO BUY THE JACKET");




const minimumAge = 16
const studentAge = 20
 
if (studentAge >= minimumAge){
    console.log('YOU ARE ELIGIBLE FOR DRIVERS LINCENSE');
    
}else {
    console.log('YOU ARE NOT ELIGIBLE FOR DRIVERS LINCENSE');
    
}
studentAge >= minimumAge
  ? console.log("YOU ARE ELIGIBLE FOR DRIVERS LINCENSE")
  : console.log("YOU ARE NOT ELIGIBLE FOR DRIVERS LINCENSE");




