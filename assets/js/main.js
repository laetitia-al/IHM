/**
* Template Name: Maundy - v2.0.0
* Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Set the count down timer
  if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').html();
    $('.countdown').countdown(count, function(event) {
      $(this).html(event.strftime(template));
    });
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  
  btn.disabled = true

  // Formulaire 

  
  var btn = document.querySelector('input');
  var txt = document.querySelector('p)')



  btn.addEventListener('click', updateBtn);

  function updateBtn() {
    if (btn.value == 'url') {
      btn.value = 'Analyse';
      txt.textContent = 'Votre site est performant'
    } else {
      btn.value = '';
      textContent = 'Saisissez un url';
    }
  }
  
})(jQuery);