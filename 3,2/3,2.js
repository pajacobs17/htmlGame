$(document).ready(function(){
	
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("hh_homes", true);
		localStorage.setItem("steps", 5)"
	} else {
		// Sorry! No Web Storage support..
		alert("I'm sorry to tell you but your browser does not support web storage and the game will not work properly");
	}
	

});