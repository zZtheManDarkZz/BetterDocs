(function() {
	"use strict";

	$(".style-picker").on("click", "> div", function (e) {
		var $el = $(e.currentTarget),
			id = $el.data("itemId"),
			$parent = $el.closest(".styles");

		$parent.children(".style").hide();
		$parent.children(".style[data-item-id=" + id + "]").show();
		$(".style-picker > div:first").addClass('first');
		$(".style-picker > div.active").removeClass('active');
		$(".style-picker > div[data-item-id=" + id + "]").addClass("active");
	});
})();
document.addEventListener("DOMContentLoaded", function(netlifyCheck) { 
setInterval(function() {
function netlifyCheck() {
	if (netlifyIdentity.currentUser() == null ) {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a onclick="netlifyIdentity.open(\'signup\');"><span>Sign Up</span></a><a onclick="netlifyIdentity.open(\'login\');"><span>Log In</span></a>';
	}
	else {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a href="/admin/" target="blank"><span>Editor Panel</span></a><a onclick="netlifyIdentity.logout();"><span>Log Out</span></a>';
	}
}
console.log("Checking for User Account");
netlifyCheck();

}, 2 * 1000);
});
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