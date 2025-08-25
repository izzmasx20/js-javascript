// Asynchronous JS
// non-blocking code
console.log("a");

 setTimeout(()=>{
    console.log("b");
    
 }, 5000);

 console.log("c");
 // a b c


 // fetch data from an external sources

 // API - application programming interface
 // private api public api



 const url = "https://jsonplaceholder.typicode.com/users";
 // callbacks (.then) async/ await
 // PROMISES - PENDING FUIFILLED()

 // json- javascript object notation
 const fetchUsers = async() => {
   try {
     const response = await fetch(url);
     const data = await response.json();
     console.log(data);
   } catch (error) {
    console.log(error);
    
   }
    
 };
 
fetchUsers();

const productUrl = "https://fakestoreapi.com/products";
const fetchProducts = async()=>{
   try {
     const response = await fetch(productUrl);
     const data = await response.json();
     console.log(data);
   } catch (error) {
    console.log(error);
    
   }
    
};
fetchProducts();