// DOM - document object model
// access elements on the page, change content, add or remove elements dynamically
// respond to users  interaction

// ACCESS ?  GET ELEMENTS  ON THE PAGE
// getelementbyid, getbytagName(h1 , p) getelementbyClassnames
// const heading = document.getElementsByTagName("h1");
// console.log(heading);

// const heading = document.getElementById("hello");
// console.log(heading);

// const paragraph = document.getElementsByClassName("para1")
// console.log(paragraph);

// console.log(paragraph[0]);

// querySelctor( first element), querySelectorAll(all elements that fits its selection)
// uses css selection .className #idName div .error

// const para = document.querySelector(".para1");
// const paras = document.querySelectorAll(".para1");

// chaanging content with js
// textContent, innerText
const bam = document.querySelector("#hello");
console.log(bam);
bam.textContent += ", js is fun";

const change = document.querySelector(".para1");
change.textContent = "hello dom practice";

// innerHTML

const myDiv = document.querySelector("div");
// myDiv.innerHTML += "<p> p from js </p>";

const userName = "john";
myDiv.innerHTML = `<h1> welcome ${userName}</h1>`;

// change attribute

const beginPara = document.querySelector(".begin");
beginPara.id = "okay";
beginPara.className = "good";
beginPara.style.color = "red";
beginPara.style.backgroundColor = "purple";

// interact with styles ( classnames)
const msgHeading = document.querySelector(".msg");
// className (totally overide)
// msgHeading.className = "success";
// classList (add remove contain)
msgHeading.classList.add("success");
//  msgHeading.classList.remove("msg");
console.log(msgHeading.classList.contains("msg"));

// create dom elements
const section = document.createElement("section");
section.innerHTML = "<h1>created from js</h1>";

const body = document.querySelector("body");
body.appendChild(section);

const form = document.createElement("form");
form.innerHTML = `<input type="password" placeholder="password">  <input type="text" placeholder="username"> <button>login</button>`;
body.appendChild(form);

const link = document.createElement("a");
link.textContent = "visit Facebook";
link.href = "https://facebook.com";

const nav = document.querySelector("nav");
nav.appendChild(link);

// response to users inmteraction (click, submit, typing)
// event-(event listener) event handler
const btn = document.querySelector("button");
// log user clicked
btn.addEventListener("click", () => {
  console.log("user clicked");
  body.style.backgroundColor = "blue";
});

const add = document.querySelector(".testbtn");
const hidden = document.querySelector(".dec");
add.addEventListener("click", () => {
  hidden.style.display = "none";
});

// form handling -> submit(do sth)
// 1. prevent the defult behaviour of the form 
// 2. get the user input (.value)
const myform = document.querySelector("form");
const usernameInput = document.querySelector("input");
const smallError = document.querySelector("small");


usernameInput.addEventListener("input" , ()=> {
    const usernameValue = usernameInput.value;
    if(usernameValue.trim().length < 5){
        smallError.textContent = "the min username length is 5";
    }
    // usernameInput.style.border = "2px solid red";
    usernameInput.className="error";
    
    else{
        smallError.textContent="";
        usernameInput.className = "";
    }
})


myform.addEventListener("submit" , (event)=>{
event.preventDefault();
const usernameValue = usernameInput.value;
if (!usernameValue.trim()){
    smallError.textContent="please provide a username";

}
// else if (usernameValue.trim().length < 5) {
    // smallError.textContent = "Min username lenth is 5";
//}

else {
    console.log("form submitted", usernameValue);
    smallError.textContent = "";
}


});



