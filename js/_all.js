$('.dropdown').on('click', function(event) {
    $('.nav-link').toggleClass('open');
	event.stopPropagation();
});
$('html').click(function() {
	$('.nav-link').removeClass('open');
});
$(".dropdown").hover(function () {
    $('.nav-link').toggleClass("drop-hover");
 });
 $(".nav-link").focus(function(){
	$('.nav-link').toggleClass('open');
	event.stopPropagation();
});