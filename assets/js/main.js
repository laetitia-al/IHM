
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
  
 

  // Formulaire 

  const btn = document.querySelector('button');
  const text = document.querySelector('.text'); 

  let isVisible = false;
  console.log(isVisible);

  btn.addEventListener('click', () => {
    isVisible = !isVisible;
    console.log(isVisible);
    isVisible ? text.classList.add('is-visible') : text.classList.remove('is-visible');
  });

  
  
})(jQuery);