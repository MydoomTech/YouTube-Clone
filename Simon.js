let gamseq = [];
let usrseq = [];

let start = false;
let level = 0;
 
let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "green", "blue"];

document.addEventListener("keypress", function(){
   if(start == false){
    console.log("Game is Started");
    start = true;

    levelUp();
   }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    }, 250);
}


function levelUp(){
    usrseq=[];
    level ++;
    
 h2.innerText =  `Level ${level}`;

 let ranIdx = Math.floor(Math.random() * 3);
 let ranColor = btns[ranIdx];
 let ranBtns = document.querySelector(`.${ranColor}`);
//  console.log(ranIdx);
//  console.log(ranColor);
//  console.log(ranBtns);
gamseq.push(ranColor);
console.log(gamseq);
 btnFlash(ranBtns);

}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function chackAns(){
    let idx = level-1;

    if(usrseq[idx] === gamseq[idx]){
       if(usrseq.length == gamseq.length){
        setTimeout(levelUp(), 1000);
       }
    }
    else{
    h2.innerHTML = `Game Over ! Your Score was <b> ${level} </b> <br> Try again TO press any Key `;  
     document.querySelector("body").style.backgroundColor = "red";
     setInterval(function(){
        document.querySelector("body").style.backgroundColor = "white";

     }, 150);  
    reset();
    }
}
function btnPress(){
    // console.log("BUTTON CLICKED IS ", this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    usrseq.push(userColor);

    chackAns(usrseq.length-1);
}34                                                                                                                                                                                                                                 

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
  start = false;
  gamseq = [];
  usrseq = [];
  level = 0;
}