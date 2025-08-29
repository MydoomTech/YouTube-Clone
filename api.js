// let jsonrep = '{"fact": "This is the fact of cat just make its vibe with nature and people that can be exrpress"}';

// let covnvert = JSON.parse(jsonrep);
// console.log(covnvert);


// let obj = {
//     name : " Nikhil ",
//     age : 23,
//     sex : "Male"
// };

// console.log(JSON.stringify(obj));

let url = "https://dogapi.dog/api/v2/breeds";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json()
// })
//     .then((data)=>{
//         console.log(data.da);
//         return fetch(url);
//     })
//     .then((res)=> {
//        return res.json();
//     })
//     .then((data2) => {
//         console.log(data2)
//     })

// .catch((err)=>{
//     console.log("ERROR -> ", err);
// })

// async function getfect(){
// try{
//         let res =  await fetch(url);
//     let data =  await res.json();
//     console.log(data);


//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2);
// }
//     catch(err){
//         console.log("ERROR" , err);
//     }

// }


// async function getFact2(){
//     try{
//         let config = {Headers : {Accept: "application/josn"}}
//         let res = await axios.get(url);
//         // console.lgo(res.data);
//         return res.data;
//     }

//     catch(err){
//         console.lgo("ERROR",err);
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click" , async ()=>{
//     let fct = await getFact2();
//     let p = document.querySelector("#fact");
//     p.innerText = data;
    
// })


// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let collArr = await getColl(country);

//     showCol(collArr);
    
// })


// function showCol(collArr){
//     let list = document.querySelector("#list");
//     list.innerText = ""; 
//     for(col of collArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;

//         list.appendChild(li);
//     }
// }


// async function getColl(country){
//     try{
//         let res = await axios.get(url + country);
//         return res.name;
//     }
//     catch(err){
//         console.log("error", err);
//     }
// }

