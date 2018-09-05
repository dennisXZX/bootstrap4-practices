$(document).ready(function() {
  // animate the gallery section when user scrolls to a certain position
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });
});
