// objects - {key: value, key:value}
// object methods - functions declaration written by the developer inside of an object

const person = {
  name: "john Doe",
  age: 42,
  complexion: "dark",
  ismarried: true,
  friends: ["jane", "peter", "susan"],
  description: function () {
    return `my name is ${this.name}, and i am ${this.age} years old`;
  },
  maritalsummary: function () {
    return `${this.name} ${this.ismarried ? "is" : "is not"} married`;
  },
};

// John Doe is Married
// object methods - functions declaration written by the developer inside of an object
console.log(person.description());
console.log(person.maritalsummary());

console.log(person);

// get properties from object, dot notation, bracket notation
// dot notation objectName. propertyName
console.log(person.name);
console.log(person.friends);
console.log(person.friends[1]);
//  bracket notation objectName['propertyName']
console.log(person["friends"]);
console.log(person["age"]);

// add new properties to an object
// height
person.height = "6'1";
person.gender = "Male";
person["hobby"] = "swinmming";

// remove property- delete
delete person.complexion;

console.log(person);

//  nested objects
// id , personalLife, contactInfo, accountInfo

const customer = {
  id: "cust-1",
  personalInfo: {
    firstName: "peter",
    lastName: "pan",
    gender: "male",
    dateOfBirth: "1990-06-12",
    national: "Nigeria",
  },
  contactInfo: {
    email: "peterpan@gmail.com",
    phone: "+234556677646",
    adress: {
      street: "12, Bode Thomas",
      city: "lagos",
      postalCode: "100001",
    },
  },
  accpuntInfo: {
    cardType: "visa",
    accountNumber: "012345678",
    accountType: "savings",
  },
  greetings: function () {
    return `hello ${this.personalInfo.firstName}, Welcome Back`;
  },
  addresss: function(){
    return `${this.personalInfo.firstName} lives at  ${this.contactInfo.adress.street} street, ${this.contactInfo.adress.city}`;
  }
};

// write a method called greeting- Hello peter , welcome back
// write a method get address -> peter lives at 12, bode thomas street lagos

console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.adress.street);
// adding bank name to the account info
customer.accpuntInfo.bankName = "GTBank";
console.log(customer.greetings());
console.log(customer.addresss());


// object destructiuring
const book = {
    title: "purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    yearPublished: 2003,
    theme: ["family", "religion", "freedom"],
    setting:{
        country: "Nigeria",
        cities: ["Enugu", "Nsukka"],
        timePerid: "Postcolonial Nigeria"
    }

};



const {title, yearPublished, theme, setting:{country}} = book;
console.log(title,yearPublished,theme);
console.log(country);








