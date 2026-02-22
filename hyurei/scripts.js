/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

function filterItems(category) {
  // Get all items
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    // If 'all' is selected, show all items
    if (category === 'all') {
      item.classList.remove('hidden');
    }
    // Otherwise, check if the item belongs to the selected category
    else if (item.classList.contains(category)) {
      item.classList.remove('hidden');
    }
    // Hide items that don't match the category
    else {
      item.classList.add('hidden');
    }
  });
}



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Get the button:
let mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function() {
    $('.sound').on('click', function() {
        var soundPath = $(this).data('audio');
        document.getElementById('playa').pause();
        $('#playa').attr('src', soundPath);
        console.log(soundPath);
        document.getElementById('playa').play();
    });    
  });

document.getElementById("year").innerHTML = new Date().getFullYear();
