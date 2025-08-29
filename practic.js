let btn  = document.querySelector("button");

btn.addEventListener("click", function(){
 alert("Random Color Display Now ");

 let h3 = document.querySelector("h3");
 let random = randomColor();
 h3.innerText = random;

 let div = document.querySelector("div");
 div.style.backgroundColor = random;

 console.log("Color has been change");

div.addEventListener("mouseenter", function(){
  console.log("You enter the div");
})

})


function randomColor(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green} , ${blue})`;

  return color;
}

// let inpute = document.querySelector("input");

// inpute.addEventListener("keydown", function(event){
//   console.log(event.key);
//   console.log(event.code);
//   console.log(event);

//   if(event.code =="ArrowUp"){
//     console.log("Character Move Up");
//   } else if(event.code == "ArrowDown"){
//     console.log("Character Move Dow");

//   }else if(event.code == "ArrowLeft"){
//     console.log("Character Move Left");
//   }
//   else if(event.code == "ArrowRight"){
//     console.log("Character Move Right");
//   }
// })

// let form  = document.querySelector("form");

// form.addEventListener("submit", function(event){
//   event.preventDefault();

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   alert(`Hi  ${user.value}, Your password is ${pass.value}`);

// })

// let form = document.querySelector("form");
// let button = document.createElement("button");
// button.appendChild(document.createTextNode("Click me"));

// form.addEventListener("click", functiohn(event){
//    event.preventDefault();
//   button.style.backgroundColor = "red";
//   button.style.color = "black";
// })

// let input = document.querySelector("#user");

// input.addEventListener("click",function(){
//   let username = input.value;
// h3.innerText = username.replace(/[^a-zA-Z\s]/``);
// alert("Text Changed sucessfule");
// })

let input = document.querySelector("#user");
let button =document.querySelector("#btn");
let ul = document.querySelector("ul");
btn.addEventListener("click", function(event){
  event.defaultPrevented();
 let item = document.createElement("li");
 item.innerText = input.value;
 input.value = "";

 ul.appendChild(item);
})