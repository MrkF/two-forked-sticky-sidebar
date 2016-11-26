$(document).ready(function () {

    var $bar = $(".side-bar");
    var lastScrollTop = 0, delta = 5;

    $(window).scroll(function () {

        var nowScrollTop = $(this).scrollTop();

        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {

            if (nowScrollTop > lastScrollTop) {

                $bar.removeClass("side-bar_fixed-top");

                if ($(window).scrollTop() + $(window).outerHeight(true) > $($bar).scrollTop() + $($bar).outerHeight(true)) {
                    $bar.addClass("side-bar_fixed");
                }

            } else {

                $bar.css('margin-top', $($bar).offset().top);
                $bar.removeClass("side-bar_fixed");

                if ($(window).scrollTop() <= $($bar).offset().top) {
                    $bar.addClass("side-bar_fixed-top");
                }
            }
            lastScrollTop = nowScrollTop;
        }


    });
})

