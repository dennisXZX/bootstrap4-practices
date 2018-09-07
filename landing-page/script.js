$(document).ready(function () {
    /* Animate scroll on navigation buttons */
    $(function () {
        // use CSS attribute selector to bind an event handler to all anchors that contain # in href, <a href="#step1">yes</a>
        // but exclude anchors with href exactly equals to #, <a href="#">no</a>
        $("a[href*=\\#]:not([href=\\#])").click(function () {

            // Two conditional checks

            // First:
            // location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            // What we're doing is replacing the first forward slash (/) with '' in the pathname
            // for the current location and comparing it to the link that's been clicked.
            // Regex ^ matches the beginning of the string
            // Regex \/ escaped /, which matches a '/' character

            // So http://personalsite.com/test/link/src, which normally would have
            // a pathname of /test/link/src would be test/link/src

            // Second:
            // The or check (||) is to see if the link matches the current domain
            // location.hostname === this.hostname

            // Basically, we want an internal anchor for the page we're on.
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                // extract the hash part of the link that's been clicked (i.e. #hash)
                // which would represent the element that you intend to scroll to
                // and wrap it into a jQuery object
                let target = $(this.hash)

                // check if the target element exists
                // if not, we query the DOM by name attribute [name="hash"]
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')

                // if we find the target element, animate to it by resetting body scrollTop
                // $('html, body') is jQuery solution for cross-browser scroll animation
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000)

                    // return false prevents default anchor link behavior
                    return false
                }
            }
        })
    })
})