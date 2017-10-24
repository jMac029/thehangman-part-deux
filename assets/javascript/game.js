// The Hangman Part Deux

// On Page Load

window.onload = function() {

	var userGuesses = [];
	var usedPhrases = [];
	var thePhrase = [];
	var counter;
	var spaces;

	var phraseArray = [ 'first', 'second', 'third', 'fourth', 'fifth'];

	const alphaNumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
					"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
					"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


	var getRandomPhrase = function() {

		thePhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)]

		console.log(thePhrase);
	};

	getRandomPhrase();

	var displayPhrase = function() {
		phraseDisplay = document.getElementById('underscores');
		correct = document.createElement('ul');

		for (var i = 0; i < phrase.length; i++) {
			correct.setAttribute('id', 'the-phrase');
			userGuess = document.createElement('li');
			userGuess.setAttribute('class', 'user-guess');
			// how to do will spaces and dashes in phrases
			if (phrase[i] === "-") {
				userGuess.innerHTML = "-";
				spaces++;
			} else if (phrase[i] === " ") {
				userGuess.innerHTML = " ";
				spaces++;
			} else {
				userGuess.innerHTML = "_";
			}
			// add user guesses to array to check with phrase
			userGuesses.push(userGuess);
			// append to the parent element to display phrase
			phraseDisplay.appendChild(correct);
			correct.appendChild(userGuess);
		}
	};


	// var displayButtons = function() {
	// 	for (var i=0; i<alphaNumeric.length; i++) {

 //       var button = $('<button>');
 //        button.addClass('letter-button letter letter-button-color');
 //        button.text(alphaNumeric[i]);
 //        button.attr("data-let", alphaNumeric[i]);
 //        $('#buttons').append(button);
	// };

	// $('.letter-button').on("click", function() {
	// 	var letter = event.target.dataset.letters
	// 	console.log(letter);


	// });

};