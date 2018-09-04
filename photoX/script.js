$(document).ready(() => {

  // animate the navbar close button
  $('.nav-button').click(() => {
    $('.nav-button').toggleClass('change');
  })

  $(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  })

});