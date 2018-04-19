/* Parallax Effect =======
======= About Me Box */


$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.006)+'em')

}








$("#About-Me").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#AboutMe").offset().top)
    }, 2000);
});

$("#Portfolio-Btn").click(function() {
    $('html, body').animate({
      scrollTop: parseInt($("#My-Portfolio").offset().top)
    }, 2000);
});


$("#Contact-Me").click(function() {
    $('html, body').animate({
      scrollTop: parseInt($("#Contact-Me-Btn").offset().top)
    }, 2000);
});


AOS.init({
  duration: 1200,
})
