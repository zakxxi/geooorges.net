/* CUSTOM JQUERY CODE */

$(function() {

$.localScroll({offset:-50});

$('#topCarousel').carousel({
	interval: 4000,
	pause: "false"
});

function close_toggle() {
   if ($(window).width() <= 768) {
      $('.nav a').on('click', function(){
          $(".navbar-toggle").click();
      });
   }
   else {
     $('.nav a').off('click');
   }
}
close_toggle();

$(window).resize(close_toggle);

});
