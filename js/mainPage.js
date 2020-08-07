$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
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
    });
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        var $nav = $(".nav-list");
        var $navBody = $(".nav__body");
        $nav.toggleClass('open');
        $navBody.toggleClass('open')
        // Do something else, like open/close menu
    });

    $(".work__video").mouseover(function(){
        $("#video")[0].play();
        $(".work__video").removeClass('isPlay');
        });
        $(".work__video").mouseout(function(){
        $("#video")[0].pause();
        $(".work__video").addClass('isPlay');
        });
});



