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

  function readMore(pessoa) {
    let dots = document.querySelector(`.card[data-pessoa="${pessoa}"] .dots`);
    let moreText = document.querySelector(
      `.card[data-pessoa="${pessoa}"] .more`
    );
    let btnText = document.querySelector(
      `.card[data-pessoa="${pessoa}"] .myBtn`
    );

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Saiba mais...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent = "Leia menos";
      moreText.style.display = "inline";
    }
  }