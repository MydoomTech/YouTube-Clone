
let h1 = document.querySelector("h1");

// function colorChange(color, delay , normalColor){

//     setTimeout(() => {
        
//         h1.style.color = color;

//         if(normalColor) normalColor();

//     }, delay);
// }

// colorChange("red", 1000 ,() => {
//     colorChange("green", 1000 ,() =>{
//         colorChange("blue" , 1000, () => {
//             colorChange("Orange", 1000 , () =>{
//                 colorChange("yellow", 1000);
//             })
//         })
//     })
// });


// function saveDb(data, success, failur){
//     let ranData = Math.floor(Math.random() *10)+1;

//     if(ranData > 4){
//         success();
//     } else{
//         failur();
//     }
// }

// saveDb("Nikhil" ,() =>{
//     console.log("Sucess : data is saved");
// },() =>{
//     console.log("failure : week Connection ");
// })


// Promise 

// function saveDb2(data){
//     return  new Promise((resolve, reject ) => {
//       let internetSpeed = Math.floor(Math.random() * 10)+ 1;
//       if(internetSpeed > 4 ) {
//         resolve("Success : data is saved ");
//       }
//       else{
//         reject("Failure : week Connection ");
//       }
//     });
// }

// let request = saveDb2("Nikhil Jangra");

// request.then(()=>{
//   console.log("Data Was Resolve in DBSMS");
//   // console.log(request);

//   return saveDb2("Data2 is");

// })
// .then(() =>{
//   console.log("data 2 is resolved");

//   return saveDb2("Data 3 is added");
// })

// .then(()=>{
//   console.log("Data 3 is resolved ");
// })

// .catch(() =>{
//   console.log("Data is Rejected ");
//   console.log(request);
// })


function colorChange(color, delay){
  return new Promise((resolve, rejected)=> {
    setTimeout(()=> {
      h1.style.color = color;
       resolve("Color was Change ");
    },delay);
  });
}

// colorChange("red", 1000)
// .than(()=> {
//   console.log("red Colow was Change");
//   return colorChange("green",1000);
// })
// .than(()=>{
//   console.log("green Color was Change ");
//   return colorChange("blue", 1000);
// })
// .than(()=>{
//   console.log("Blue color was Change ");
//   return colorChange("yellow", 1000);
// })
// .than(()=> {
//   console.log("Yellow color was Change ");
// })

// // .catch(()=>{
// //   console.log("Color was Rejceted ");
// // });

async function Change() {
  await colorChange("red", 1000);
  await colorChange("green",1000);
  await colorChange("blue",1000);
  colorChange("yellow", 1000);

}

function changeCOlro(color, delay){
  return new Promise((reosleve, rejected)=>{
  setTimeout(()=>{
    h1.style.color = color;
reosleve("Change Color ");
  },delay);
})
}