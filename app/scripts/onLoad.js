window.APPONLOAD = {
  init: function () {
    this.isotope()
    this.jumpLinks()
    this.scrollEvents()
},

isotope: function() {
  if( $('.work-grid').length === 0)
  {
    return;
  }

  var $grid = $('.work-grid').isotope({
    layoutMode: 'fitRows',
    itemSelector: '.work-grid-item',
    percentPosition: true,
    fitRows: {
      gutter: '.gutter-sizer'
    },
    stagger: 30
  });

  $('.work-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter'),
        slug = '*';

        slug = $(this).data('slug');

    $grid.isotope({
      filter: filterValue 
    });
    //changing active class with click event
    $('button.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    sessionStorage.setItem('categoryText', slug);
    sessionStorage.setItem('categoryThumbs', filterValue);
  });  

},

jumpLinks: function() {
// SMOOTH SCROLL ON HOME PAGE
  $('.js-jumplink').on('click', function(e) {
    var target = $(this).attr('href');
    var offset = $('header').height() + 1;
    e.preventDefault();

   if(window.innerWidth >= 900 || target === '#work-jump') {
     offset = 0;
   }

   $('html, body').stop(true).animate({
     scrollTop: $(target).offset().top - offset
     }, 1000, 'swing');

       return false;
   });


// SMOOTH SCROLL FROM PROJECT PAGE TO SECTIONS ON HOME PAGE
   if (window.location.hash) {
       scroll(0,0);
       }

   setTimeout(function(){scroll(0,0);},1);

   if(window.location.hash) {
      var offset = $('header').height() + 1;
      if(window.innerWidth >= 900 || window.location.hash === '#work-jump') {
        offset = 0;
      }
     $('html, body').stop(true).animate({
         scrollTop: $(window.location.hash).offset().top - offset
     }, 600, 'swing');

     return false;
   }
},

scrollEvents: function() {
//CHECK IF ON HOME PAGE - IF NOT KILL
  if( $('.intro').length === 0)
  {
    return;
  }

  $(window).scroll(function() {
    var scrollLink = $('.js-jumplink'),
        scrollbarLocation = $(this).scrollTop(),
        offset = $('header').height() + 1;
    
// CHANGE ACTIVE STATE OF NAV LINKS
    scrollLink.each(function() {      
      var sectionOffset = $(this.hash).offset().top - offset;
      
      if (scrollbarLocation >= sectionOffset) {
        $(this).parent().addClass('nav-active');
        $(this).parent().siblings().removeClass('nav-active');
      }
      else {
        $(this).parent().removeClass('nav-active');
      }
    });

// NAV ANIMATING IN AND OUT
    var addActiveNav = $('header, .main-nav-underline, .logo, .social-icon-nav');

    if (scrollbarLocation >= $('.work').offset().top) {
      addActiveNav.addClass('active');
    }
    else {
      addActiveNav.removeClass('active');
    }
// SKILLS LEVELS ANIMATING IN AND OUT
    var addActiveSkills = $('.illustrator, .indesign, .photoshop, .keynote, .powerpoint, .word, .html, .css, .javascript, .email, .greensock');

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    if ($('.skills').isInViewport()) {
      addActiveSkills.addClass('active');
    }
    else {
      addActiveSkills.removeClass('active');
    }
  });

}

}; //end init


$(window).load(function(){
  APPONLOAD.init();
});//END WINDOW LOAD