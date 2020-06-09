//Navbar
/* **************** Navbar  **************** */

const Button = document.querySelector('#menu');
const navLinks = document.querySelector('.hide-menu');


function toggleBtn(){
    const navBar = document.querySelector('.fa-bars');

    if(navLinks.classList.contains('hide-menu')){
        navLinks.classList.remove('hide-menu');
       // navBar.classList.add('d-none');
    } else{
        navLinks.classList.add('hide-menu');
       // navBar.classList.remove('d-none');
    }
}

Button.addEventListener('click', toggleBtn);
/* ****************** End of Navbar **************** */

/* slide show */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/* slide show */