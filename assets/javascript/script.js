window.onload = function () {

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var categories;
	var chosenCategory;
	var word ;
	var guess ;
	var guesses = [ ];
	var lives = 10;
	var counter ;
	var space ;

	var showLives = document.getElementById("myLives");

	selectCat = function () {
		if (chosenCategory === categories[0]) {
			categoryName.innerHTML = "The Chosen Category is Amphibians.";
			document.getElementById("picture").innerHTML = '<img class="img img-responsive" id="amphibian" src="assets/images/amphibians.jpg">';
		} else if (chosenCategory === categories[1]) {
			categoryName.innerHTML = "The Chosen Category is Mammals.";
			document.getElementById("picture").innerHTML = '<img class="img img-responsive" id="mammal" src="assets/images/mammal.jpg">';
		} else if (chosenCategory === categories[2]) {
			categoryName.innerHTML = "The Chosen Category is Reptiles.";
			document.getElementById("picture").innerHTML = '<img class="img img-responsive" id="reptile" src="assets/images/reptile.jpg">';
		}
	}

	//create guesses list
	result = function () {
		wordHolder = document.getElementById("holder");
		correct = document.createElement("p");

		for (var i = 0; i < word.length; i++) {
			correct.setAttribute("id", "my-word");
			guess = document.createElement("span");
			guess.setAttribute("class", "guess");
			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} else {
				guess.innerHTML = " _ "
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	}
	


	// track number of lives remaining
	comments = function () {
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) {
			showLives.innerHTML = "Game Over";
		}
		for (var i=0; i <guesses.length; i++) {
			if (counter + space === guesses.length) {
				showLives.innerHTML = "You win!";
			}
		}
	}

	check = function() {
		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

			var k = (guesses.indexOf(userGuess));
			if (k === -1) {
				comments();
			} else {
				alert("You have already guessed " + userGuess + ". Try a different letter");
			}

			guesses.push(userGuess);

			for (var i = 0; i < word.length; i++) {
				if (word[i] === userGuess) {
				guesses[i].innerHTML = userGuess;
				}
			}

			var j = (word.indexOf(userGuess));
			if (j === -1) {
				lives -=1;
				comments();
			} else {
				comments();
			}
		}
	};


	//playing the game
	play = function () {
		categories = [
			["frog", "toad", "newt", "salamander"],
			["giraffe", "zebra", "lion", "tiger"],
			["snake", "lizard", "gecko"]
			];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, "-");

		selectCat();
		guesses = [];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
		check();
	}

	play();

	//Reset 

	document.getElementById("reset").onclick = function() {
		correct.parentNode.removeChild(correct);
		play();
	}
}

