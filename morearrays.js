const africanCountries = ['Mali','Togo','South-Africa','Nigeria','Libya']
console.log(africanCountries.includes('kenya'));
console.log(africanCountries.length);
console.log(africanCountries.unshift('Egypt'));
console.log(africanCountries.push('Namiba'));
console.log(africanCountries.sort());
 const reArange = africanCountries
 console.log(africanCountries.sort());

 console.log(africanCountries.concat('china','japan','indinesia'));


 const startsWith = africanCountries.find((country)=>country.startsWith('T'));
 console.log(startsWith);
 

 const specialCountries = africanCountries.filter((country)=> country.length>5)
 
 const convert = africanCountries.map((country)=> country.toUpperCase());
 console.log(convert);
 
 const letter = africanCountries.every((country)=> country.includes('p'))
 console.log(letter);

 let myBallance = 5000;
 const transactions = [6000, -3000, 900, 400, -2000];

 const allcredittransaction = transactions.filter((transaction)=>transaction >0);
 console.log(allcredittransaction);
 
const allDebitTransactions = transactions.filter((transactions)=> transactions < 0);
console.log(allDebitTransactions);

const ifTransactionisGreaterThanBallance = transactions.some((allcredittransaction)=>allcredittransaction > myBallance);
console.log(ifTransactionisGreaterThanBallance);

const availableBalance = transactions.reduce((a,b)=> a+b, myBallance);
console.log(availableBalance);




 
  




 
    
    
 
 


