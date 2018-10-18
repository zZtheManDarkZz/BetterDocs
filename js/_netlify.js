document.addEventListener("DOMContentLoaded", function(netlifyCheck) { 
setInterval(function() {
function netlifyCheck() {
	if (netlifyIdentity.currentUser() == null ) {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a onclick="netlifyIdentity.open();"><span>Sign Up</span></a><a onclick="netlifyIdentity.open();"><span>Log In</span></a>';
	}
	else {
		var generateHere = document.getElementById("nav-actions");
		generateHere.innerHTML = '<a onclick="netlifyIdentity.open();"><span>Logged In</span></a>';
	}
}
console.log("Checking for User Account");
netlifyCheck();

}, 2 * 1000);
});