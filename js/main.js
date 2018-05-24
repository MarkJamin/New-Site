// The Parallax Textbox //


$(window).scroll(function() {
  parallax();
})

function parallax() {

  let wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.006)+'em')

}




// Clickable links for Nav Bar //



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



// The fade title & Nav //



$(document).ready(function () {
  $('#title-name').hide(0).delay(500).fadeIn(3000);
});

$(document).ready(function () {
  $('#title-name span').hide(0).delay(500).fadeIn(4000);
});

$(document).ready(function () {
  $('nav').hide(0).delay(500).fadeIn(5000);
});



