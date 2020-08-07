$(function () {
   
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



