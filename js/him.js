;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {

        // fixed body if height less then height of viewport
        var bodyHeight = $('body').height();
        var viewportHeight = window.innerHeight;

        if( bodyHeight <  viewportHeight){
            $('.footer').addClass('fixed');
        }

    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });

})(jQuery); // Fully reference jQuery after this point.
