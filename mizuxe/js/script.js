// Get the current year for the copyright in footer
$('#year').text(new Date().getFullYear())

// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' })

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
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
