$(document).ready(function () {
  // animate the navbar close button
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change')
  })

  // animate the navbar when user scrolls to a certain position
  $(window).scroll(function () {
    let position = $(this).scrollTop()

    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar')
    } else {
      $('.nav-menu').removeClass('custom-navbar')
    }
  })

  // animate the mission highlight section when user scrolls to a certain position
  $(window).scroll(function () {
    let position = $(this).scrollTop()

    if (position >= 650) {
      $('.camera-img').addClass('fromLeft')
      $('.mission-text').addClass('fromRight')
    } else {
      $('.camera-img').removeClass('fromLeft')
      $('.mission-text').removeClass('fromRight')
    }
  })

  // gallery filter feature
  $('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter')

    if (value === 'all') {
      $('.filter').show(300)
    } else {
      $('.filter').not('.' + value).hide(300)
      $('.filter').filter('.' + value).show(300)
    }
  })

  // toggle active link style in the gallery filter
  $('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item')
  })

  // animate the price section when user scrolls to a certain position
  $(window).scroll(function () {
    let position = $(this).scrollTop()

    if (position >= 4300) {
      $('.card-1').addClass('moveFromLeft')
      $('.card-2').addClass('moveFromBottom')
      $('.card-3').addClass('moveFromRight')
    } else {
      $('.card-1').removeClass('moveFromLeft')
      $('.card-2').removeClass('moveFromBottom')
      $('.card-3').removeClass('moveFromRight')
    }
  })

  // smooth scrolling
  $("#myNavbar a").on('click', function (event) {
    console.log('click')
    // HTMLHyperlinkElementUtils.hash property returns a DOMString containing a '#' followed by the fragment identifier of the URL
    if (this.hash !== "") {
      event.preventDefault()

      const hash = this.hash

      // $(hash).offset().top gets the current top position of the clicked element
      // after scrolling to the specified position, update the address bar with the new hash value
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash
      })
    }
  })
})