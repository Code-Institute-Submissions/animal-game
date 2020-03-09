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

W3C CSS Validator and W3C HTML Validator were used to identify any issues with the HTML and CSS code. The initial results identified syntax errors that were corrected. Example error below;

The element button must not appear as a descendant of the a element.

This error occured as the button element appeared inside the anchor element. This was corrected by removing the button element and adding the attributes to the anchor element.

Autoprefixer was used to ensure that vendor prefixes had been added to the CSS.

### Known issue
If the player successfully matches two cards followed by successfully matching another two cards, the success audio file won't play a second time as the duration of audio file is longer than the time between successful clicks. This could be resolved using another setTimeout method but this would an adverse effect on the total time. A shorter audio file for the success sound would resolve this.

## Deployment
The project was developed locally using Visual Studio Code. Git was downloaded from https://git-scm.com/ and installed locally for version control. In parallel, a repository also called animal-game was created on GitHub.

The project workspace was initialised using git init command from the cmd terminal within VS Code.

To connect the local git repository to GitHub repository, the following command was executed from the cmd terminal.

git remote add origin https://github.com/LawlessXD/animal-game.git

Each time a new feature was added the files would be added to the staging area using git add * from the cmd line.

The features were then commited with a suitable message using git commit -m "Added moveCounter".

The changes were pushed to the remote repository using git push -u origin master initially and using git push for each subsequent push.

### GitHub Pages
The game is hosted using GitHub pages was mdeployed as follows;

1. Logged into **GitHub**.
2. Located animal-game repository.
3. Navigate to **settings**.
4. Scrolled down to GitHub Pages.
5. **Source** Select master branch as the source. 
6. The page is then reloaded.
7. The URL for the deployed site is available under GitHub Pages.

### Clone this project

1. Navigate to main page for the repository https://github.com/LawlessXD/animal-game
2. Click "Clone or Download".
3. Copy the URL
4. Open folder to the directory where you would to Clone the repository.
5. Open terminal within your local IDE
6. Execute git clone https://github.com/LawlessXD/animal-game.git from the command line.
7. The project will noe be cloned.  

## Acknowledgement & Credits

I would like to thank my mentor Rahul Patil for his support and advice throughout the project.

The sample code available at https://getbootstrap.com/ was used for generating the Congrats modal dialog.

CSS used to flip the card via CSS3 Pushing the Limits by Stephen Greig and 
https://www.w3schools.com/howto/howto_css_flip_card.asp 

The idea for disabling the board and returning after the firstcard is clicked
https://marina-ferreira.github.io/tutorials/js/memory-game/ 

The FisherYates shuffling algorithm was sourced from the below URL are reused
https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1

### Images
The images used in the project were taken from a variety of sources using **Google**. 

**Calf**
https://www.vectorstock.com/royalty-free-vector/cute-baby-cow-cartoon-vector-16996888

**Sheep**
http://www.carmarthenshireherald.com/wp-content/uploads/2017/04/sheep-004.jpg
https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.carmarthenshireherald.com%2F15547%2Fpolice-use-sheep-dna-to-secure-conviction%2F&psig=AOvVaw1-_759hDTurRQ6lYtgq47G&ust=1583316314609000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCOim842H_ucCFQAAAAAdAAAAABAU

**lamb**
https://www.kilcoint.com/img/img-uploads/product_cat_image/sheep-lambing.1531226269.jpg

**cat**
https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg

**Kitten**
https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg

**lion**
https://depositphotos.com/36562857/stock-photo-side-view-of-a-lion.html

**cub**
https://depositphotos.com/10872189/stock-photo-lion-cub-6-months.html

**Horse**
https://eponaexchange.com/horses-for-sale/classifieds/hunter-derby-prospect
https://eponaexchange.com/images/uploads/listings/1783/fb_img_1512015235153__480x400.jpg

**colt**
https://www.horsejournals.com/horse-care/breeding/foal/feeding-young-horses-sound-growth
https://horsej-intellectsolutio.netdna-ssl.com/cdn/farfuture/pUjan45l30DOKQXQKGR7ulbqW8CY5JU5jAv6GqKed3A/mtime:1543626955/files/styles/article_large/public/pictures-videos/articles/5502276584_a401824d44_o-Sini%20Merikallio-Flickr.jpg?itok=zqURhM-O

### Sounds
https://freesound.org/people/Leszek_Szary/sounds/171670/
https://freesound.org/people/KorGround/sounds/344687/
https://freesound.org/people/FunWithSound/sounds/456966/