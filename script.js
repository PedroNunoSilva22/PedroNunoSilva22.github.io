$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	});

$(function() {
	$('.header').click(function(){
		
		$('.header').toggleClass('shrink');
		$('.bold').toggleClass('shrink');
		//$('.touch').fadeOut();

		if($('.header').hasClass('shrink')) {
			$('.touchs').fadeOut();
			$(".container").css("display", "grid");



		}
		else {
			$('.touchs').delay(1000).fadeIn(400);
			$(".container").css("display", "none");
		}
		
		

	});


for (var i = 1; i < 9; i++) {
	new Vivus('s'+i+'', {
			file: 'images/ai-0'+i+'.svg',
			onReady: function (myVivus) {
    // `el` property is the SVG element
  // myVivus.el.setAttribute('width', '90%');
}
});
}



	/* $(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 ) {
			$('.header').toggleClass('shrink');
			$(".container").css("display", "grid");
		$('.touch').fadeOut();
		}
		


	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
		
});	*/


	// $( window ).bind( "mousewheel DOMMouseScroll", function() {
	// 	var scroll = getCurrentScroll();
	// 	if ( scroll >= 0.01) {
	// 		$('.header').toggleClass('shrink');
	// 		$(".container").css("display", "grid");
	// 	}

	// 	if($('.header').hasClass('shrink')) {
	// 		//$('.touch').fadeOut(400);
	// 		$(".container").css("display", "grid");
	// 	}
	// 	else {
	// 		//$('.touch').delay(1000).fadeIn(400);
	// 		$(".container").css("display", "none");
	// 	}

	// });
	// function getCurrentScroll() {
	// 	return window.pageYOffset || document.documentElement.scrollTop;
	// }

});