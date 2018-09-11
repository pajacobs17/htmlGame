
 // Filename: welcome.js
 // Written by: Paul Jacobs
 // Purpose: actions for the welcome page
 

$(document).ready(function(){
	
	document.getElementById("yes").onclick = function () {
		window.location.href = "/firstRoom/firstRoom.html";
	};
	                              	
	document.getElementById("no").onclick = function () {      		
		window.location.href = "/knockedOut/knockedOut.html"; 
	};
	

});