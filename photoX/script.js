$(document).ready(() => {

  // animate the navbar close button
  $('.nav-button').click(() => {
    $('.nav-button').toggleClass('change');
  })

  // animate the navbar when it scrolls to a certain position
  $(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  })

  $(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  })

});