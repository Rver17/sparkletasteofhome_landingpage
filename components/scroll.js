$(document).ready(function() {
    // Smooth scrolling effect
    $('.scroll-link').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
  });