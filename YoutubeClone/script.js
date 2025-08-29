let manuIcon = document.querySelector(".manu");
let sidebar = document.querySelector(".side-bar");

const contener = document.querySelector(".contener");


manuIcon.addEventListener("click", ()=>{
    sidebar.classList.toggle("small-sidebar");

    contener.classList.toggle("large-contener")

})

