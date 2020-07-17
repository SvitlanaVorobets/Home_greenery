$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".fixed-top").addClass("change-fixed-top");
    } else {
        $(".fixed-top").removeClass("change-fixed-top");
    }
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$("#but").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scrollone").offset().top
    }, 1000);
});
$("#buttwo").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scroltwo").offset().top
    }, 1000);
});