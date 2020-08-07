$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="../img/btn-prev.png" alt="">', '<img src="../img/btn-next.png" alt="">'],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        var $nav = $(".nav-list");
        var $navBody = $(".nav__body");
        $nav.toggleClass('open');
        $navBody.toggleClass('open')
        // Do something else, like open/close menu
    });

});