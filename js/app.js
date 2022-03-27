/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// build the navbar sections using js methods
const fragment = document.createDocumentFragment();

for (let i=1; i<=3; i++) {

    const element = document.createElement('li'); // create list element in the loop  
    

    const nav_link = document.createElement('a'); // create anchor element for each list 
    nav_link.classList.add("menu__link"); // add class in css file for anchor element 
    nav_link.innerText = "Section "+i; // add text content to anchor elements
    

    nav_link.classList.add("section"+i); // add class to the nav links the same as section IDs. 


    element.appendChild(nav_link); 

    fragment.appendChild(element);
    
}

const navbar_list = document.querySelector('ul'); // select the ul element 
navbar_list.appendChild(fragment); // append the created fragment to the parrent ul





// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll("section");
function makeActive(){
    for (let i=0;i < sections.length;i++ ){

        const box = sections[i].getBoundingClientRect();
        
        if (box.top<=150 && box.bottom>=150){
            // 1. add "your-active-class" to the class list of section in viewport
            j = i+1
            sections[i].classList.add("your-active-class");
            //2. add class 'active' to the navbar link asscoicated to the section id
            const nav_link = document.querySelector(".section"+j);
            nav_link.classList.add("active");
            console.log(nav_link)

        }

        else {

            j = i+1 // section selection as it start from 1 not zero

            // 1. remove the your-active-class  from section which is not active
            sections[i].classList.remove("your-active-class");


            //2. remove active class from non active nav links
            const nav_link_2 = document.querySelector(".section"+j);
            nav_link_2.classList.remove("active")

        }


    }

}





// Scroll to anchor ID using scrollTO event

function scroll_to_id(evt){

    

    const anchor_id = evt.target.classList[1];
    
    console.log(anchor_id);

 
    const element = document.getElementById(anchor_id);
    element.scrollIntoView();

}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click


// Set sections as active
document.addEventListener("scroll", function() {
    makeActive();
  });



const nav_anchors = document.querySelectorAll("a");


for (let i=0;i<nav_anchors.length;i++){

    nav_anchors[i].addEventListener("click",scroll_to_id);


}
