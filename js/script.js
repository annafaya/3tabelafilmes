$('.carousel').carousel({
    interval: 3000,
  })

  $(document).ready(function() {
	
    $('.card').delay(1800).queue(function(next) {
      $(this).removeClass('hover');
      $('a.hover').removeClass('hover');
      next();
    });
  });