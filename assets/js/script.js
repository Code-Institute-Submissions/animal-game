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

var audioSuccess = new Audio('./assets/sounds/match.wav');
var audioError = new Audio('./assets/sounds/nomatch.wav');
var gameWon = new Audio('./assets/sounds/trumpets.mp3');

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
    cta = document.getElementById("cta").innerHTML="<button onclick='resetGame()'>Reset Game</button>";
    startTimer();
}

function resetGame(){
  resetMoves();
  resetTimer();
  var gameCards = document.querySelectorAll(".card");
  for (x = 0; x < gameCards.length; x++) {
    if(gameCards[x].classList.contains("show")){
        gameCards[x].classList.remove("show");
    }
    if(gameCards[x].classList.contains("match")){
      gameCards[x].classList.remove("match");
  }
  }
  gameCards.forEach(card => {
      card.removeEventListener("click", moveCounter);
    });
  cta = document.getElementById("cta").innerHTML="<button onclick='startGame()'>Start Game</button>"; 
}

function resetMoves(){
  totalMoves = 0;
  moves = document.getElementById("moves");
  moves.innerHTML = totalMoves;
}
function resetTimer(){
  time.innerHTML = "0 mins 0 secs";
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
}


function checkCards(){
    let match = cards[firstCardIndex].family === cards[secondCardIndex].family;
    match ? cardsMatched() : noCardsMatched();
}
function cardsMatched() {
  audioSuccess.play();
  firstCard.classList.add("match");
  secondCard.classList.add("match");
  firstCard.removeEventListener("click", moveCounter); //Remove event listener for turned card
  secondCard.removeEventListener("click", moveCounter); //Remove event listener for turned card
  resetCardHolders();
}

function noCardsMatched() {
  audioError.play();
  setTimeout(() => {
    firstCard.classList.remove("show");
    secondCard.classList.remove("show");
    resetCardHolders();
  }, 1200);
}

function resetCardHolders(){
  firstCard = null;
  firstCardIndex = null;
  secondCard = null;
  secondCardIndex = null;
  disabled = false;
}

//declare variables to track number of moves
//Two cards turned equals one move
var moves;
var cardsTurned = 0;
var totalMoves = 0;
let firstCard, secondCard;
let disabled = false;
let firstCardIndex,secondCardIndex;

function moveCounter() {
  if (disabled) return; //If the game board is disabled, do nothing when a user clicks on a card.
  if (this === firstCard) return; //If the user clicks on the first card again, do nothing.
  cardsTurned++;

  if (cardsTurned == 1){
    this.classList.add("show");
    firstCard = this;
    firstCardIndex = Array.prototype.indexOf.call(this.parentNode.children,this);
    return;
  }
  else if (cardsTurned == 2) {
    totalMoves++;
    moves = document.getElementById("moves");
    moves.innerHTML = totalMoves;
    this.classList.add("show");
    secondCard = this;
    secondCardIndex = Array.prototype.indexOf.call(this.parentNode.children,this);
    disabled = true; //Disable the game board once two cards have been turned
    cardsTurned = 0;
    checkCards();
    checkMatchedCards();
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

// declaring variable of matchedCards to hold the number of cards with class match
let matchedCards = document.getElementsByClassName("match");
var finalMinutes, finalSeconds;
function checkMatchedCards(){
  if (matchedCards.length == 12){
    clearInterval(timer);
    setTimeout(() => {
      congratsModal() ;
    },1100);
  };
}
function congratsModal(){
  gameWon.play();
  var finalMoves = document.getElementById("final-moves");
  var finalTime = document.getElementById("final-time");
  var finalScore = document.getElementById("final-score");
  var totalScore = getScore();

  finalMoves.innerHTML = totalMoves;
  finalTime.innerHTML = time.innerHTML;
  finalScore.innerHTML = totalScore;  
  
  $("#congrats-modal").modal("show");
}

function getScore(){
  var score = 0;
  if(totalMoves <= 8){
    score += 20;  
  }
  else if(totalMoves <= 12){
    score += 10;
  }
  else if(totalMoves <= 16){
    score += 5;
  }
  if(minutes < 1 && seconds <= 20){
    score += 15;
  }
  else if(minutes < 1 && seconds <= 40){
    score += 10;
  }
  else if(minutes < 1){
    score += 5;
  }
  return score;
}


