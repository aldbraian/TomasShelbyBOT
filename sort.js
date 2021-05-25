const words = require('./words.json');

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}

function shootGameRandom() {
	return words.shootGame[randomNumber(words.shootGame.length)];
}

module.exports = { shootGameRandom };