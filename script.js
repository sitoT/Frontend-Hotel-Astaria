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


// google map
function initMap() {
    var dumbo = {lat: 40.700802, lng:73.987602};
    var mapOptions = {
        center: dumbo,
        zoom: 10
    };
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}