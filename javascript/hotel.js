//how to do this came straight from https://stackoverflow.com/questions/1140402/how-to-add-jquery-in-js-file
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
script.type = 'text/javascript';

//global storage object
myStorage = window.localStorage;



function main() {
	//key is required to exit the hotel, false until found
	myStorage.setItem('doorKey', false);
	//movesLeft tracks how many more doors can be opened if HH Homes is found
	myStorage.setItem('movesLeft', 5);
	//used to tell if homes has been found and movesLeft needs to be decremented
	myStorage.setItem('homes', false);
}


//if the key is found, make .key true and alert the user
//give an alert if the web browser does not support local storage
function keyFound() {
	console.log("ddd");
	console.log(typeof(Storage));
	console.log("ddd");
	if (typeof(Storage) !== "undefined") {
		if(String(myStorage.doorKey) == "false") {
			myStorage.setItem('doorKey', true);
			console.log("found key");
			alert("You look around the room and find a key. Perhaps it might be useful at some point..." + 
			" You pick it up and put it in your back pocket");
		}
	} 
	else {
		console.log("no");
		//No Web Storage support..
		alert("Your browser does not support local storage and the game will not work");
	}
}

//decrement the .movesLeft if .homes is true and a user has clicked to another room
//if .movesLeft is 0, send to death screen
function decrementMoves() {
	if(typeof(Storage) !== "undefined") {
		//decrement if moves are left and homes is found
		if(myStorage.homes == true && Number(myStorage.movesLeft) >= 1) {
			myStorage.setItem('movesLeft', myStorage.getItem(movesLeft) - 1);
			myStorage.movesLeft = Number(myStorage.movesLeft) - 1;
		}
		//if no moves are left, the game ends
		if (myStorage.homes == true && Number(myStorage.movesLeft) == 0) {
			window.location.href = "https://cs.iupui.edu/~pajacobs/436/htmlGame/deathScreen/deathScreen.html";
		}
	}
}

//if homes is found, set the .homes to be tru
function homesFound() {
	if(typeof(Storage) !== "undefined") {
		myStorage.setItem('homes', true);
	}
}

//if the player enters the homes room for the first time, make it black and  set up an alert.
//otherwise, just make the background black
function makeBlack() {
	if(myStorage.getItem('homes') != true) {
		document.body.style.backgroundColor = "black";
		alert("You sense something. A presence. The lights... There's a movement towards you ");
	}
	else {
		document.body.style.backgroundColor = "black";
	}
}

//this function verifies the key is found and routes to the proper page if true
//otherwise, routes back to original page and sends up an alert
function verifyKey() {
	if(myStorage.doorKey == true) {
		window.location.href = "https://cs.iupui.edu/~pajacobs/436/htmlGame/1,3/1,3.html";
	}
	else {
		alert("The door appears to be locked.");
		
	}
}

//for showing the text and hiding the note once the note image is clicked
function showNote(){
	document.getElementById("noteImage").style.display = "none";
	document.getElementById("noteText").style.display = "";
}

