var words = ["frog", "giraffe", "snake", "tiger", "zebra", "elephant"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var computerWord = words[Math.floor(Math.random() * words.length)];
var guessedLetters = [];



//page loads and sets wins to 0 and displays first word
window.onload = function() {
	document.getElementById("wins").innerHTML = "<p>Wins: " + wins + "</p>";
	document.getElementById("output").innerHTML = computerWord;
}

//user types letters and system checks against selected word

//if letter is in word it is displayed on screen

//users guesses are recorded on screen and duplicates not allowed
document.onkeyup = function(event) {
	var userGuess = event.key;
	guessedLetters.push(userGuess);

	if (userGuess = alphabet) {
	document.getElementById("guessed").innerHTML = guessedLetters;
	}
}

//incorrect guesses lower remaining guesses by one


//user wins or loses and game resets while tracking results




