/* This script implements the image careousel used on packages.html.
It fetches the content from packages.html and
relies on the styling implemented in main.css. */

//Initalizing slide counter
var slideCounter = 0;

//Fetching array of the slides
var slides = document.getElementsByClassName("careousel-content");

//Function for displaying a slide and prepearing for displaing the next slide
function nextSlide(){
    //Making sure all slides are hidden before showing the correct one
    for (let i = 0; i < slides.length; i++){
        slides[i].className = "careousel-content hidden";
    }

    //Checkin if the counter is at the end of the slide list
    if (slideCounter === slides.length){
        // If at the end, starting at the beginning again
        slideCounter = 0;
    }

    //Making next slide visible
    slides[slideCounter].className = "careousel-content active-slide";

    //Incrementing counter to prepeare for displayng next slide
    slideCounter++;

    //Waiting for 5 seconds before the function calls itself
    setTimeout(nextSlide, 5000);
}

//Initialising the image careousel
nextSlide();
