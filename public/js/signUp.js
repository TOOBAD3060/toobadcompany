//  SIGNUP PAGE
const registeredMail=document.getElementById("registeredMail");
const firstTime=document.getElementById('firstTime');
const confirmedPassword=document.querySelector("#confirmedPassword")
const next=document.querySelector("#next");
const signUpForm=document.querySelector(".signUpForm")
const doesNotMatch=document.querySelector(".doesNotMatch");
const validity=document.querySelector(".validEmail")
const correctIcon=document.querySelector(".emailValid");
const inCorrectIcon=document.querySelector(".emailInvalid");
const firstTimeVisibility=document.querySelector(".firstTime")
const secondTimeVisibility=document.querySelector(".secondTime")
const nextBtn= document.getElementById("next");


//  partial/message.ejs
const flashMessage = document.querySelector(".flash-message");

setTimeout(()=>{
  flashMessage.textContent=""
},3000)



// Email Check

registeredMail.setAttribute("onkeyup","check()");
let regExp= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  check();

function check() {
  if (registeredMail.value.match(regExp)) {
     correctIcon.setAttribute("src","/images/checked.png")
     correctIcon.classList.add("active");
    registeredMail.style.borderColor="green";
    nextBtn.removeAttribute("disabled")
  }
  else if(registeredMail.value==""){
    correctIcon.classList.remove("active");
   registeredMail.style.borderColor="skyblue";
   nextBtn.setAttribute("disabled","disabled")
  }
  else{
    displayEmailValidity("Please input a valid email")
    correctIcon.setAttribute("src","/images/x-button.png")
    correctIcon.classList.add("active");
    registeredMail.style.borderColor="red";
     nextBtn.setAttribute("disabled","disabled")
  }
  
}
//  first password and confirm password equality check
  var firstValue= firstTime.value;
  var secondValue= confirmedPassword.value

signUpForm.addEventListener("submit",function(e){
  var firstValue= firstTime.value;
  var secondValue= confirmedPassword.value
  

   if (firstValue!==secondValue) {
           e.preventDefault();

       displayPasswordDoesNotMatch("Password doesn't match")

          }
    // else{
    //   e.preventDefault();
    //     window.location.href="/pages/verify.ejs"
    // }

})

//  Warning alerts
function displayEmailValidity(text) {
   validity.textContent=text;
   setTimeout(function(){
     validity.textContent="";
   },2500)
  
}

function displayPasswordDoesNotMatch(text) {
doesNotMatch.textContent=text;
    
  setTimeout(function(){
   doesNotMatch.textContent="";

  },2000)
}



//  show password icons

firstTime.setAttribute("onkeyup","visibility()");
function visibility(){
  if (firstTime.value !== "") {
    firstTimeVisibility.classList.add("active")
  }
  else{
    firstTimeVisibility.classList.remove("active");
  }
}

confirmedPassword.setAttribute("onkeyup","secondvisibility()");
function secondvisibility(){
  if (confirmedPassword.value !== "") {
    secondTimeVisibility.classList.add("active")
  }
  else{
    secondTimeVisibility.classList.remove("active");
  }
}

//  first password and confirm password visibility and hidden
firstTimeVisibility.addEventListener("click",()=>{
   if (firstTime.type=="password") {
      firstTime.type="text"
      firstTimeVisibility.setAttribute("src","/images/hide.png")
   }
   else{
     firstTime.type="password"
     firstTimeVisibility.setAttribute("src","/images/show.png")

   }
})
secondTimeVisibility.addEventListener("click",()=>{
  if (confirmedPassword.type=="password") {
     confirmedPassword.type="text"
     secondTimeVisibility.setAttribute("src","/images/hide.png")

  }
  else{
    confirmedPassword.type="password"
    secondTimeVisibility.setAttribute("src","/images/show.png")

  }
})




