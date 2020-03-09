# Animal Memory Game - Milestone Two Project

You can view the finished website [here](https://lawlessxd.github.io/animal-game/index.html)!

***

The purpose of this project is to create an interactive front-end website that responds to user actions. I decided to create a memory game where the player would have to match two animals, a parent and a child by turning over two cards. If the player turns a card with a Cow, the corresponding matching card is a card with a Calf.

The memory game is a single page design using HTML, CSS, Javascript and Bootstrap technologies learned throughout the Full Stack Web Developer course with Code Institute.

The images are randomly positioned at the beginning of each game.

![Desktop Preview](https://github.com/LawlessXD/animal-game/blob/master/assets/images/desktop.jpg "Desktop Preview")

***

## UX

The main objective is to build a memory game that users can have fun playing. The interface is simple with a set of instructions
on how to play the game displayed and a call to action button to start the game.

Wireframes for the iniial concept were created using a combination of MS Visio and MS Paint on how the site should be displayed on both Desktop and Mobile devices. 

Wireframes can be viewed [here](https://github.com/LawlessXD/animal-game/blob/master/wireframes/Wireframe.pdf "Wireframes")
___
## Features

### Start Game Button
This allows the user to start the game when clicked and generates the images for the game.

### Moves
This displays the number of moves that the player has taken during the game.

### Time
The timer starts when the user presses the Start Game button and displays the final time to the user once all images have been turned.

### Reset Game Button
This allows the user to reset the game with the option to start another game.

### animation
The pulse effect on the images when a match is made was achieved using external CSS library from https://daneden.github.io/animate.css/. The wobble effect on the images when no match is made was also achieved using the same classes available from https://daneden.github.io/animate.css/.

### Congratulations Modal
A modal is displayed to the player once all cards have been matched showing the player the number of moves, time taken and score for the game.

### Sounds
Sound effects are played when the player matches two animals and when the layer doesn't match two animals. A trumpet is played with the Congratulations modal.

### Features to be implemented 
- An option to select the level as Easy, Medium or Hard. 
- An option to pause the game
- An option to enter the players name
- An option to store the players score
- Create a leaderboard for all players with their respective moves, time, and score.
___
## Technologies Used

### Languages
- **HTML** - Used as markup for the website
- **CSS** - Used to add style to the page and position elements
- **Javascript** - Used to create different functions for use in the game.


### Libraries
- **Bootstrap** - Used throughout the site for responsive design
- **jQuery** - Used in conjunction with Bootstrap V4 Framework and for Congrats Modal
- **Font Awesome** - Used for Github icon in footer
- **Animate.css** - Used to add animation to cardsMatched and noCardsMatched functions
                Download via https://daneden.github.io/animate.css/
- **Google Fonts** - imported into CSS

### Tools
- **VSCode** - Used as IDE for project
- **Git** - Used for version control throughout the project
- **MS Paint** - Used for modifying images for cards and wireframes
- **MS Visio** -  Used to create wireframes
- **Autoprefixer** - Used to add vendor prefixes to style.css

___

## Testing

### Chrome DevTools
**Chrome Devtools** was used to simulate how the website displayed on different devices with emphasis on Large Laptop (17.3") & Mobile screen sizes. It was also used as the main debugging tool when content was displayed incorrectly.

The console within Chrome Devtools was invaluable and used throughout to resolve issues when writing the different functions.

```javascript
console.log(cards); //Output cards Object to console.
fisherYatesShuffle(cards); //Shuffle cards Array.
console.log(cards); //Check that cards Array is in a different order.
```
The above was the sequence of testing used to ensure that the cards Array had changed after shuffle.

The console also helped identify syntax errors in the Javascript source file such as Unexpected Identifier caused by the below use of "" around the href. Replacing this with '' resolved the issue. 

```javascript
let cta = document.getElementById("cta").innerHTML="<a href="#game"><button onclick='startGame()'>Start Game</button></a>"; 
//Changed to;
let cta = document.getElementById("cta").innerHTML="<a href='#game'><button onclick='startGame()'>Start Game</button></a>";
```
The below was added to listen for when the player clicks a card. 

```javascript
    let gameCards = document.querySelectorAll(".card");
    gameCards.forEach(card => {
      card.addEventListener("click", moveCounter);
    });
```

Initially, it was possible to click more than two cards so the following code needed to be added to ensure that the cards turned as expected.

When the player clicks a card, that card object is passed to the moveCounter function. The following if statement is required to ensure that no action is taken if same card is selected again.

```javascript
if (this === firstCard) return;
```
Once the player has selected two different cards, the game board needs to be disabled to stop any additional cards being turned until we have checked for a match. This is acheived via boolean disabled.

```javascript
disabled = true; //Disable the game board once two cards have been turned
```

The following statement is then added to the beginning of the moveCounter function;
```javascript
if (disabled) return; //If the game board is disabled, do nothing when a user clicks on a card.
```

Testing the congrats modal found that the modal was displayed before the last card was turned. This was resolved by adding the encapsulating the call within setTimeout as shown below; 
```javascript
    setTimeout(() => {
      congratsModal() ;
    },1100);
```

### Manual Testing
The game journey was tested manually by watching each the result of actions taken when playing the game i.e. that move only increased when two cards were turned.

The resetGame function was tested manually to ensure that the moves and timer were reset accordingly.

The following online validation tools were also used to validate HTML, CSS, and Javascript.

