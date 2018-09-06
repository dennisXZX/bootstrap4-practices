$(document).ready(function () {
  // animate hamburger menu button
  $('.hamburger-menu').click(function () {
    $('.navigation').toggleClass('change')
  })

  // animate the gallery section when user scrolls to a certain position
  $(window).scroll(function () {
    let position = $(this).scrollTop()

    if (position >= 350) {
      $('.gallery').addClass('change')
    } else {
      $('.gallery').removeClass('change')
    }
  })

  $('.writers-accordion').click(function (event) {
    const clickTarget = event.target.id.split('-')[0]
    const authorName = event.target.id.split('-')[1]

    // check if user has clicked on a button
    if (clickTarget === 'button') {
      $('#book-1').attr('src', `img/writers/${authorName}-book1.jpg`)
      $('#book-2').attr('src', `img/writers/${authorName}-book2.jpg`)
    }
  })
})
