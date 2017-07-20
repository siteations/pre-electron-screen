$(function() {
	if ( $( '#subbar' ).length ) {
		var subbar = $('#bannerimage');
		var subheight = subbar.height();
		var margins_int = parseInt($('.page').css("padding"), 10);
		$('.page').css("padding", margins_int += subheight);
		}
	else{
		var subbar = $('#bannerimage');
		var subheight = subbar.height();
		var margins_int = parseInt($('.page').css("padding"), 10);
		$('.page').css("padding", margins_int += subheight);
		}
	});