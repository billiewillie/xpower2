$(document).ready(function(){

	$('.slider').slick({
	  infinite: true,
	  dots: false,
	  arrows: true,
	});

	$('a').on('click',function(e){
	  e.preventDefault();
	  var $this = $(this);
	  var attr = $this.attr('href');
	  $("html, body").animate({
	    scrollTop: $(attr).offset().top
	  }, 600);
	});
});