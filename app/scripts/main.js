/* global $, APP */
'use strict'

window.APP = {
  init: function () {
    this.mobileMenu()
    this.workGridRollover()
    this.owlMoreWork()
    this.owlHD()
    this.insertCategory()
    this.refreshIframe()
    this.resetFilter()
},

//WORK GRID ROLLOVER /////////////////////////////////////////////////////////////
workGridRollover: function() {

  $('.work-grid-item').on('mouseenter', function() {
    if (window.innerWidth <= 768) {
     return;
    }
      
    var $this = $(this);
    $this.find('.portfolio-thumb-desc').fadeIn();

    $('.work-grid-item').on('mouseleave', function() {
      var $this = $(this);
      
      $this.find('.portfolio-thumb-desc').fadeOut();
    });
  });

}, //end work grid rollover

//MAIN OWL ON PROJECT PAGES /////////////////////////////////////////////////////////////
owlHD: function() {

  //check if a carousel needs to be built
  if( $('#owl-carousel-more-work').length === 0)
  {
    return;
  }
  
  $('#owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    slideSpeed : 3000,
    autoplay: true,
    loop: true,
    });

}, // end owl

//INSERT CATEGORY /////////////////////////////////////////////////////////////
insertCategory: function() {
  $('.js-insert-category').text(sessionStorage.getItem('categoryText'));
// end insert category object  
},

//resetFilter /////////////////////////////////////////////////////////////
resetFilter: function() {
  $('.js-reset-filter').on('click', function() {
    var filterValue = '*';
    var slug = '';
    sessionStorage.setItem('categoryText', slug);
    sessionStorage.setItem('categoryThumbs', filterValue);
  });
},

//OWL FOR MORE WORK THUMBS /////////////////////////////////////////////////////////////
owlMoreWork: function() {
  var $categoryThumbs = sessionStorage.getItem('categoryThumbs'),
      $projectTitleName = sessionStorage.getItem('projectTitleName');

//check if a carousel needs to be built
  if( $('#owl-carousel-more-work').length === 0)
  {
    return;
  }
//set variable to default all types of work
  if (sessionStorage.getItem('categoryThumbs') === null) {
    $categoryThumbs = '*';
  }

  function moreWorkThumbs() {
    $('#owl-carousel-more-work').owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        375: {
          items: 2
        },
        640: {
          items: 5
        },
        769: {
          items: 5
        }
      },
      dots: false,
      loop: false,
      margin: 20,
      nav: true,
      navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'] 
      });
  }    

  function filterSlides() {
    if ($categoryThumbs === '*') {
      moreWorkThumbs();
      }

    else {
      $('#owl-carousel-more-work > div').not($categoryThumbs).remove();
      $('#owl-carousel-more-work' > '$categoryThumbs').show(checkNoSlides());
    }
  }

  function checkNoSlides() {
    if ($('.owl-slide').length < 4 && window.innerWidth > 640) {
      $('#owl-carousel-more-work').addClass('re-center');
      moreWorkThumbs();
    }

    else {
      moreWorkThumbs();
    }
  }

  filterSlides();

}, //end more work owl

//REFRESH IFRAME /////////////////////////////////////////////////////////////
refreshIframe: function() {
  $('.refresh-iframe-icon').click(function(event) {
    $('#js-banner')[0].contentWindow.location.reload(true);
  });
  
}, //end refreshiFrrame

//MOBILE MENU /////////////////////////////////////////////////////////////
mobileMenu: function() {

  $('#mobile-menu').on('click', function (event) {
    $(this).toggleClass('active');
    $('.nav').toggleClass('nav-active');
  });

  function closeNav() {
    if ($('#mobile-menu').hasClass('active')) {
      $('#mobile-menu').removeClass('active');
      $('.nav').removeClass('nav-active');
    }
  }

  $('.nav').on('click', function (event) {
    closeNav();
  });

  $('.js-jumplink').on('click', function (event) {
    closeNav();
  });
  //end mobile menu
}

}; //end init


$(function () {
  APP.init();
});






