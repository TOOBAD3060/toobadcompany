//  Our offers display
const allOffers=["Quality Services is Assured","Nice and  Affordable Rates Guaranteed",
"Up to 15% discount","A Trial will convince you"]

const offers = document.querySelector("span.offers");

let current = 0;

displayOffers()


function displayOffers(){
   

    if(current > allOffers.length - 1 ) {
        current = 0;
       offers.textContent=allOffers[current] 
       current++;
    }
    
    else{
        offers.textContent=allOffers[current]
        current++;

    } 
       
    setTimeout(displayOffers,4000)

}

// Our works --- slideshow

const allImages= document.getElementsByClassName("works");
let slideIndex=0;

slide();
function slide(){
for (let i = 0; i < allImages.length; i++) {

      allImages[i].style.display="none";

}
if (slideIndex > allImages.length-1){
    slideIndex=0;
}
allImages[slideIndex].style.display="block"
 slideIndex++;

 setTimeout(slide,4000)
} 

//        Reviews

const reviews=[
    {
        id:1,
        name:"Sara Jones",
        job:"UX designer",
        img: "images/user-1.png",
        text: "The product is nothing but Muah.I just can't stop using your Product",
    
    },
    {
        id:2,
        name:"Daniel White",
        job:"Web Developer",
        img: "images/user-2.png",
        text: "The product is so so so so so cool,you'll should give it a trial",
    
    },
    {
        id:3,
        name:"Susan Smith",
        job:"Graphics designer",
        img: "images/user-3.png",
        text: "The product is so cool, but I still prefer ....",
    
    },
    ];
    let currentReview = 0;
   const image= document.getElementById("person-img")
   const person= document.getElementById("author")
   const job= document.getElementById("job")
   const info= document.getElementById("info")
   const nextBtn=document.querySelector(".next-btn")
   const prevBtn= document.querySelector(".prev-btn")

   window.addEventListener("DOMContentLoaded",function(){
       showPerson();
   })
   
    function showPerson() {
        
        const item=reviews[currentReview];
        person.textContent= item.name;
        job.textContent= item.job;
        info.textContent=item.text;
        image.src=item.img;

            // language translation
const countries={
    "ar-SA": "Arabic",
    "en-GB":"English",
    "fr-FR": "French",
    "sv-SE" : "Swedish",
    "so-SO": "Somali",
    "zu-ZA": "Zulu"
}

const fromText=info.textContent;
const selectTag= document.querySelector("select");
const translateBtn= document.querySelector(".translateBtn")




    for (const country_code in countries){

    let option=`<option class="spaceBtw"  value="${country_code}">${countries[country_code]}</option>`;
   

   
    selectTag.insertAdjacentHTML("beforeend",option);//adding option tag inside select tag   
}



translateBtn.addEventListener("click",()=>{
    let text=fromText;
   const translateFrom="en-GB" //getting fromSelect tag value
   const translateTo=selectTag.value; //getting toselect tg value
    



   let apiUrl= `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

//    fetching api response and returning it with parsing into js obj
//  and in another then method receiving that obj

if (translateTo=="en-GB") {
    info.textContent=item.text;
}
else{
fetch(apiUrl).then(res=> res.json()).then(data =>{

    info.textContent=data.responseData.translatedText;

})
}
})

        };
        //show next person
    nextBtn.addEventListener("click",function(){
            currentReview++;
            if (currentReview>reviews.length-1) {
                currentReview=0;
                
            }
            showPerson(currentReview);
        });
        //show previous person
    prevBtn.addEventListener("click",function(){
        currentReview--;
        if (currentReview<0) {
           currentReview=reviews.length-1;
            
        }
        showPerson(currentReview)
    });


      // show join us link
      window.addEventListener("scroll",function(){
    
        const scrollHeight= window.pageYOffset;
        const joinUsBtn= document.querySelector(".joinUsNow");
        const nav=document.querySelector("nav");
        const navHeight = nav.getBoundingClientRect().height;
        const bigBackToTopBtn= document.querySelector("#bigArrow")
        const smallBackToTopBtn= document.querySelector("#smallArrow")

if (scrollHeight > navHeight) {

    joinUsBtn.classList.add("show-link")
    // nav.classList.add("fixed-nav")
    
}
else{
    joinUsBtn.classList.remove("show-link")
    // document.querySelector("nav").classList.remove("fixed-nav")

}
if (scrollHeight > 300) {
    bigBackToTopBtn.classList.add("show-link")
    smallBackToTopBtn.classList.add("smallArrow")
}
else{
    bigBackToTopBtn.classList.remove("show-link")
    smallBackToTopBtn.classList.remove("smallArrow")
 
}

    })



//   Footer year

const year= document.getElementById("year")
let currentYear= new Date().getFullYear();

year.textContent= currentYear;

// hamburger for min-width of 500px


const shamburger = document.querySelector("nav.smallScreen .hamburger");

shamburger.addEventListener('click',function(){

    shamburger.classList.toggle('active');
    const showMenu= document.querySelector("nav.smallScreen ul")

    showMenu.classList.toggle('active');
})

Footer
