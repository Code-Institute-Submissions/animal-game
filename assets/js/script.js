//Declare global variables
const cards = [
  { family: "cow", type: "parent", src: "assets/images/cow.png" },
  { family: "cow", type: "child", src: "assets/images/calf.png" },
  { family: "dog", type: "parent", src: "assets/images/dog.jpg" },
  { family: "dog", type: "child", src: "assets/images/puppy.jpg" },
  { family: "sheep", type: "parent", src: "assets/images/sheep.jpg" },
  { family: "sheep", type: "child", src: "assets/images/lamb.jpg" },
  { family: "cat", type: "parent", src: "assets/images/cat.jpg" },
  { family: "cat", type: "child", src: "assets/images/kitten.jpg" },
  { family: "horse", type: "parent", src: "assets/images/horse.jpg" },
  { family: "horse", type: "child", src: "assets/images/colt.jpg" },
  { family: "lion", type: "parent", src: "assets/images/lion.jpg" },
  { family: "lion", type: "child", src: "assets/images/cub.jpg" }
];
var deck = document.getElementById("card-deck");

/* Reference: https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1 */
function fisherYatesShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// self executing function to create the deck
function createDeck() {
    deck.innerHTML = "";
  for (x = 0; x < cards.length; x++) {
    var src = cards[x].src;
    console.log(typeof src);
    console.log("Testing " + `${src}`);
    card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="card-inner"><div class="card-front"><img src="assets/images/card-front.jpg" alt="card front face"></div><div class="card-back"><img src="${src}" alt="card back face"></div></div>`;
    deck.appendChild(card);
  }
};

createDeck();

function startGame() {
    fisherYatesShuffle(cards);
    createDeck();
    var gameCards = document.querySelectorAll(".card");
    gameCards.forEach(card => {
      card.addEventListener("click", showCard);
    });
}

let flipped = false;
let firstCard, secondCard;
let disabled = false;
let firstCardIndex,secondCardIndex;

function showCard() {
  if (disabled) return; //If the game board is disabled, do nothing when a user clicks on a card.
  if (this === firstCard) return; //If the user clicks on the first card again, do nothing.

  this.classList.add("show");

  if (!flipped) {
    flipped = true;
    firstCard = this;
    firstCardIndex = Array.prototype.indexOf.call(
      this.parentNode.children,
      this
    );
    return;
  } else {
    secondCard = this;
    secondCardIndex = Array.prototype.indexOf.call(this.parentNode.children,this);
    disabled = true; //Disable the game board once two cards have been turned
    checkCards(); //Call function to see if the cards match
  }
}
  