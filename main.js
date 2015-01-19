/* CUSTOM JQUERY CODE */

$( document ).ready(function() {


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


$.localScroll({offset:-50});

});
