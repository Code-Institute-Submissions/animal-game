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
      card.addEventListener("click", moveCounter);
    });
    startTimer();
}

let firstCard, secondCard;
let disabled = false;
let firstCardIndex,secondCardIndex;

function checkCards(){
    let match = cards[firstCardIndex].family === cards[secondCardIndex].family;
    match ? cardsMatched() : noCardsMatched();
}
var matchCount = 0;
function cardsMatched(){
    firstCard.removeEventListener('click',moveCounter); //Remove event listener for turned card
    secondCard.removeEventListener('click',moveCounter); //Remove event listener for turned card
    firstCardIndex = null; //Reset card index
    secondCardIndex = null; //Reset card index
    disabled = false; //re-enable game board
    matchCount += 2;
    if (matchCount == 12){
        clearInterval(timer);
        setTimeout(congratsModal(),5000)
    };
}

function noCardsMatched(){
    disabled = true;
    setTimeout(() =>{
        firstCard.classList.remove('show');
        secondCard.classList.remove('show');
        firstCardIndex = null;
        secondCardIndex = null;
        disabled = false;  
    },1200);
}

//declare variables to track number of moves
//Two cards turned equals one move
var moves;
var cardsTurned = 0;
var totalMoves = 0;

function moveCounter(){
    cardsTurned++;
    if(cardsTurned == 2){
        totalMoves++;
        moves = document.getElementById("moves");
        moves.innerHTML = totalMoves;
        cardsTurned = 0;
    }
}
// Create a timer to count the time it takes to turn over all cards
var minutes = 0;
var seconds = 0;
var time = document.getElementById("timer");
var timer;

function startTimer(){
    timer = setInterval(function(){
        time.innerHTML = minutes + " mins " + seconds + " secs";
        seconds++;
        if(seconds >= 60){
            minutes++;
            seconds = 0;
        }
    },1000);
}

function congratsModal(){
    alert("Congrats")
}