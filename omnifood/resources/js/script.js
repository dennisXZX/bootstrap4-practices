$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    })

    /* Animate scroll on hero buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    })

    /* Animate scroll on navigation buttons */
    $(function () {
        // use CSS attribute selector to bind an event handler to all anchors that contain # in href, <a href="#step1">yes</a>
        // but exclude anchors with href exactly equals to #, <a href="#">no</a>
        // To use any of the meta-characters as a literal part of a name, it must be escaped with with two backslashes: \\
        // https://api.jquery.com/category/selectors/
        $('a[href*=\\#]:not([href=\\#])').click(function () {

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

    /* Animations on scrolling to some sections */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%'
    })

    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        const nav = $('.js--main-nav')
        const icon = $('.js--nav-icon i')

        // toggle the navigation upon clicking
        // slideToggle() is a jQuery method
        nav.slideToggle(200)

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
    })
})