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
if (window.netlifyIdentity) {
	window.netlifyIdentity.on("init", user => {
		if (!user) {
			window.netlifyIdentity.on("login", () => {
				document.location.href = "/admin/";
			});
		}
	});
}
document.getElementById("nav-actions").addEventListener("load", signedIn);
	function signedIn() {
	if (netlifyIdentity.currentUser() == null ) {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a onclick="netlifyIdentity.open();"><span>Sign Up</span></a><a onclick="netlifyIdentity.open();"><span>Log In</span></a>';
	}
	else {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a onclick="netlifyIdentity.open();"><span>Logged In</span></a>';
	}
}