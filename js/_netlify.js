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