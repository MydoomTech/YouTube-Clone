const todo = [];

let taks = prompt("Enter What want to show ");

while(true){

    if(taks === "quite"){
        console.log("Your are Quitting the app");
        break;

        
    } 

    else if(task === "add"){
        let add = prompt("Enter What You Want to add");
        todo.push(add);
        console.log("Task added Succfully");
    }

    else if(task === "list"){

        console.log("-------------")
        for(let i= 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }

        console.log("-------------")
    }

   else if(taks === "delete"){
     let idx = prompt("Enter What want to delete You ");
     todo.slice(idx, 1);

     console.log("Taks Delete Successfully ");

   
    }

    else{
        console.log("You Type Wrong taks");
    }

   task = prompt("Please enter Your New Taks");
}
