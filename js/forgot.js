const forgotForm=document.querySelector(".forgotForm");
const popUpForgot=document.querySelector(".popUpForgot")

forgotForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    popUpForgot.classList.add("active")
    forgotForm.classList.add("disable")
})