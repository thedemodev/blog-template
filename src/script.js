$(document).ready(function(){

	//////////////////////////////////////////////////////////////////////////////
	// Nav shrink

	var lastScroll = 0;
	var scrollingDown = false;

	$(document).on('scroll', function(){
		var winTop = $(window).scrollTop();

		if(winTop >= 40) {
			$('nav').addClass('scrolling');
		} else if(winTop < 40) {
			$('nav').removeClass('scrolling');
		}

		scrollingDown = (winTop > lastScroll && winTop > 0)? true : false; // winTop > 300 &&
		lastScroll = winTop;

		if(scrollingDown && winTop >= 40){
			$('nav, .subheader').addClass('hide');
		} else {
			$('nav, .subheader').removeClass('hide');
		}
	});

	//////////////////////////////////////////////////////////////////////////////

});
