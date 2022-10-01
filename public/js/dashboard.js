//  partial/message.ejs
const flashMessage = document.querySelector(".flash-message");

setTimeout(()=>{
  flashMessage.textContent=""
},3000)


// Btns
const profileBtn= document.getElementById("profile");
const settingsBtn= document.getElementById("settings");
const dashboardBtn= document.getElementById("dashboard");


// Views
const profile= document.querySelector(".profile");
const changepassword= document.querySelector(".changepassword");
const dashboard= document.querySelector(".dashboard");

window.addEventListener("DOMContentLoaded",()=>{
    profile.classList.add("visible")
    profileBtn.classList.add("active")
    changepassword.classList.add("invisible")
    dashboard.classList.add("invisible")
})

profileBtn.addEventListener("click",()=>{
   profile.classList.add("visible");
   changepassword.classList.add("invisible");
   dashboard.classList.add("invisible")

   profile.classList.remove("invisible");
   changepassword.classList.remove("visible");
   dashboard.classList.remove("visible")

   profileBtn.classList.add("active");
   settingsBtn.classList.remove("active");
   dashboardBtn.classList.remove("active");
})

settingsBtn.addEventListener("click",()=>{
    profile.classList.add("invisible");
   changepassword.classList.add("visible");
   dashboard.classList.add("invisible")

   profile.classList.remove("visible");
   changepassword.classList.remove("invisible");
   dashboard.classList.remove("visible")

   profileBtn.classList.remove("active");
   settingsBtn.classList.add("active");
   dashboardBtn.classList.remove("active");
})

dashboardBtn.addEventListener("click",()=>{
    profile.classList.add("invisible");
    changepassword.classList.add("invisible");
    dashboard.classList.add("visible")
 
    profile.classList.remove("visible");
    changepassword.classList.remove("visible");
    dashboard.classList.remove("invisible")

    profileBtn.classList.remove("active");
   settingsBtn.classList.remove("active");
   dashboardBtn.classList.add("active");
})



// getting inputs
const oldPwd = document.querySelector(".old_password");
const newPwd = document.querySelector(".new_password");
const confirmPwd = document.querySelector(".confirm_new");
// getting hide and show icons
const currentPass = document.querySelector(".currentPass")
const newPass = document.querySelector(".newPass")
const confirmPass = document.querySelector(".confirmPass")

oldPwd.setAttribute("onkeyup","visibility()");
function visibility(){
  if (oldPwd.value !== "") {
    currentPass.classList.add("active")
  }
  else{
    currentPass.classList.remove("active");
  }
}

newPwd.setAttribute("onkeyup","secondvisibility()");
function secondvisibility(){
  if (newPwd.value !== "") {
    newPass.classList.add("active")
  }
  else{
    newPass.classList.remove("active");
  }
}



confirmPwd.setAttribute("onkeyup","thirdvisibility()");
function thirdvisibility(){
  if (confirmPwd.value !== "") {
    confirmPass.classList.add("active")
  }
  else{
    confirmPass.classList.remove("active");
  }
}

//  show password icons
//  first password and confirm password visibility and hidden
currentPass.addEventListener("click",()=>{
   if (oldPwd.type=="password") {
      oldPwd.type="text"
      currentPass.setAttribute("src","images/hide.png")
   }
   else{
     oldPwd.type="password"
     currentPass.setAttribute("src","images/show.png")

   }
})
newPass.addEventListener("click",()=>{
  if (newPwd.type=="password") {
     newPwd.type="text"
     newPass.setAttribute("src","images/hide.png")

  }
  else{
    newPwd.type="password"
    newPass.setAttribute("src","images/show.png")

  }
})

confirmPass.addEventListener("click",()=>{
    if (confirmPwd.type=="password") {
       confirmPwd.type="text"
       confirmPass.setAttribute("src","public/images/hide.png")
  
    }
    else{
      confirmPwd.type="password"
      confirmPass.setAttribute("src","public/images/show.png")
  
    }
  })

//   On Reset Password Form Submission
const signUpForm = document.querySelector("form");
const information = document.querySelector(".info")
signUpForm.addEventListener("submit",function(e){

    const oldPassValue = oldPwd.value;
    const newPassValue = newPwd.value;
    const confirmPassValue = confirmPwd.value;

    
     if (newPassValue !== confirmPassValue) {
             e.preventDefault();
      information.textContent = "Password does not match"
  
            }
     else if (oldPassValue == confirmPassValue && oldPassValue == newPassValue) {
                e.preventDefault();
         information.textContent = "No changes made"
     
               }

      // else{
      //   e.preventDefault();
      //     alert("Changes made successfully")
      // }

  // Flash error messages

     setTimeout(()=>{
         information.textContent = "";
     },2000)

  })


