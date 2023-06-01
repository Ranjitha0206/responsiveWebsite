burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");
form= document.querySelector(".form")
fname= document.querySelector("#name");

burger.addEventListener('click', ()=> {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})


// function validateName(){
//     console.log("name validation");
// var namePattern = "^[\\p{L} .'-]+$";
// if(namePattern == fname){
//     fname.classList.add("valid");
// }else{
//     fname.classList.remove("valid");
// }
// }


// form.addEventListener('submit', ()=>{
//     console.log("form validation");
//     if(fname.classList != "" ){
//         alert("enter valid name")
//     }
    

// })

// validateName(fname);