// strings - are text characters in double or single quotes
const firstName = "John";
const lastName = "Doe";
const middleName = "Olaoluwa";

// string properties- length
console.log(firstName.length, middleName.length);
// string concatenation ( joining of strings + a+b)

const fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

// strings methods- theyv are built in js fuctions that can perform on strings
// touppercase, tolowercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// startswith, endswith, includes
console.log(fullName.startsWith("Joh"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"));

// replace and replaceAll
console.log(fullName.replace("o", "#"));
console.log(fullName.replaceAll("o", "#"));

const myEmail = "atijosanmichaelolaoluwa@gmail.com";
console.log(myEmail.toUpperCase());
console.log(myEmail.length);
console.log(myEmail.endsWith("google.com"));
console.log(myEmail.replace("@", "*"));

// charAt, indexOf, lastIndexOf
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));

// concat, trim, slice, substring, substr

// trims remove whitespace
console.log(fullName.concat("is my name"));

const username = "     user001";
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

// extract portions of a string
const surName = "brooke";
// slice, substring (start, end (none-))
console.log(surName.slice(2, 5)); // ook
console.log(surName.substring(1));

// substr (start, number of characters)
console.log(surName.substring(2, 2));

// concatenation
const author = "Chinua Achebe";
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;

// the book things fall apart written by chinua achebe was published in the year 1997

// template literals `${varName}`
const summary = `the book ${bookTitle} was authored by ${author.toUpperCase()}`;
console.log(summary);

// chinua Achebe wrote the book things fall apart
const summary2 = `${author} wrote the book ${bookTitle}`;

console.log(summary2);

// quote Tinubu said and i quote ' let the poor breathe'
const quote = `Tinubu said and i quote 'let the poor breath`;
console.log(quote);

const helloWorld = "hello world";
console.log(helloWorld.toUpperCase());

const JAVASCRIPT = "javascript";
console.log(JAVASCRIPT.toLowerCase());

const hello = "H";
console.log(hello.charAt(0));

const HelloWorld = "World";
console.log(HelloWorld.slice(0, 5));
const cat = "I like Cats";
console.log(cat);
console.log(cat.replace("Cats", "Dogs"));

const HelloW = "Hello";
console.log(HelloW.startsWith("Hello"));

const character = "sokratis papastathopoulos";
console.log(character.length);

const nickName = "Ola";
console.log(nickName);

let gunners = "Arsenal";
console.log(gunners);

// my name is Ola  and my favourite club is Arsenal

const summary3 = `my name is ${nickName} and my favourite club is ${gunners}`;
console.log(summary3);
