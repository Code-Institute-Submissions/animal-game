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