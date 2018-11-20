var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [0, 2];

var checkForMatch = function () {
	document.getElementsByTagName('cards')[0].setAttribute('src', cards.cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function (cardId) {
	var cardId = this.getAttribute('data-id');
	checkForMatch ();
	console.log("User flipped " + cards.rank);
	cardsInPlay.push(cards.rank);
};

console.log(cards[0].cardImage);
console.log(cards[0].suit);

console.log(cards[2].cardImage);
console.log(cards[2].suit);

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();