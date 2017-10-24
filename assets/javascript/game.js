// The Hangman Part Deux

// On Page Load

window.onload = function() {

	var userGuesses = [];
	var usedPhrases = [];
	var thePhrase = [];
	var counter;
	var spaces;

	var phraseArray = [ 'first', 'second', 'third', 'fourth', 'fifth'];


	var getRandomPhrase = function() {

		thePhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)]

		console.log(thePhrase);
	}

	getRandomPhrase();

};