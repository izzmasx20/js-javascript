// rest and spread operator
// ...
// rest operator ...
// used in destructuring to collect remaning values


const countries = ["Brazil", "russia", "japan", "togo", "portugal"];
const [first, , , ...others]= countries;
console.log(others);

const user = {
    name: "john",
    age : 32,
    gender: "male",
    ismarried: "true",

};

const {ismarried, age, ...propertiesleft}=user;

// spread operator ...
// used in unpacking values

const updateUsers = {
    ...user,
    country: "nigeria",

};
console.log(updateUsers);

const developingCountries = ["Mali", ...countries, "Iran", "India"];
console.log(developingCountries);




const nums = [5, 7, 9, 3, 7];
console.log(Math.max(...nums));


// optional chaining
user?.profilepicture;

// <img src= user.profilePicture />


// nullish coalescence - to provide deafult values if a variable evaluates to  null or undefined
const profilePicture = null;
console.log(profilePicture || "default avatar");


