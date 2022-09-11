const popUp=document.querySelector(".popUp");
const inputs=document.querySelectorAll(".verify")
const verifyBtn=document.querySelector(".verifyBtn")

const verifyForm=document.querySelector(".verifyForm")

// verifyForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//       popUp.classList.add("active")
      // verifyBtn.classList.add("disable")
      // inputs.forEach(function(input){
      //   input.classList.add("disable")
      // })
  //    verifyForm.classList.add("disable");
  // })


  function setFocus(first,last) {
    if(first.value){
      document.getElementById(last).focus()
    }
  }