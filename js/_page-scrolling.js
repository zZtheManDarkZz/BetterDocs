$(function(){
	var navbar = $('header>.container');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
$(function(){
	var navbar2 = $('header>.nav-container .container ');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar2.removeClass('navbar-scroll');
		} else {
			navbar2.addClass('navbar-scroll');
		}
	});
});