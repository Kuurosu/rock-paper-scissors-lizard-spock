# Rock Paper Scissors Lizard Spock

[Link to game](https://kuurosu.github.io/rock-paper-scissors-lizard-spock/)

## Description

This is a website designed to let the user play the game "Rock, Paper, Scissors, Lizard, Spock". A more evolved version of the basic, "Rock, Paper, Scissors".

The game was originally designed by Sam Kass in 1998. It had grown in popularity after an episode of "The Big Bang Theory" where the character "Sheldon" explains to the rest of the crew the rules of the game (Episode - The Rothman Disintegration).

I have designed this game to allow players to
try their luck against an computer player who will randomly select one of the five options available.

### Overview

When you visit the website you are presented with five options to choose from.

![Choices](/media/choice-area.png)

I chose simple images to distinguish what each button represents.They are all clickable and have a hover effect when a cursor is placed over it.

The rules on how to play are as follows:

- Rock beats Scissors 
- Rock beats Lizard 
- Paper beats Rock 
- Paper beats Spock 
- Scissors beats Paper 
- Scissors beats Lizard 
- Lizard beats Paper 
- Lizard beats Spock 
- Spock beats Rock 
- Spock beats Scissors

Upon chooses an option, a result will appear displaying whether you have won, lost, or drawn. There will also be a side-by-side result of the image the player picked and one that the computer picked for a more visual representation of what happened.

![Choice Result](/media/choice-result.png)

Below the results of the players choices, is a lives, and score. Initially the player starts with three lives and must keep winning to accumulate a higher score. For every loss the player receives a minus - one is adjusted to the players total lives. When this hits zero, the game is stopped and the player is presented with their score at the top and a play again button is created. It also stops the player from selecting any more options.

![Lives and Score](/media/lives-score.png)

Upon hitting "Play Again", the players score is reset to zero, lives reset to three, and the buttons become selectable again.

![Game Over](/media/game-over.png)

Below the lives and score, is also a quick explanation of how to play the game, quoted from the show "The Big Bang Theory".

![How To Play](/media/how-to-play.png)

## Mockup VS Final Design

Initially I planned on having the choices below the results and
for there to be a countdown to when the results would be displayed. There was also going to be a more in-depth lives system where there would be three objects and one would be removed per loss. At my current level this was proving to be too difficult and was taking up too much time. In the future, I hope to be able to come up with a simple, yet efficient way to implement this.

![Mockup](/media/game-screen.png)

Instead, the final design was something I was happy with, and proved to work on different screen sizes.

![Final Design](/media/responsive.png)

## Design

I used a plain darker blue / purple colour to display the important content against a colourful space background.As to not be too distracting
for the user, but still allow the pleasure of immersing themselves into an out - of -this - world experience.

### Font

I chose Kanit Regular 400, a rigid, yet curvy font to allow users to easily read what was on screen and used a very, very pale grey colour(almost white) to be easily seen against the darker background.

This font was acquired from Google Fonts.

```
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
```
## Strategy

### User Stories

Users might visit this page for various reasons:

- A player looking for something more challenging than regular Rock, Paper, Scissors.
- A fan of "The Big Bang Theory" that has heard about the game from the show and would like to try a game of it.
- A quick time-waster that would keep someone busy for 5-10 minutes.

### Scope

Users might expect:

- Simple choices representing their answer.
- A score to see what's the highest they can achieve.
- A visual representation of both theirs, and the computers choice.

Users might want:

- Instructions on how to play the game.
- The option to play again once they have run out of lives.

As a developer I would want for my users:

- A simple way for the user to select their choices.
- An easy way to show the users score and the option to play again once their lives reach zero.
- A simple way to change the colours in the CSS file using root var statements.

### Structure

The website is just one page, that displays the title of the game. The game area with simple direction. The lives and score counters. And the "How to play" instruction area. 

When the user selects a choice for their move. An image is generated with their choice below the buttons, next to what the computer has chosen. With the results of who has won/loss/drawn in the center. 

Once the user has run out of lives, the buttons are disabled and they can no longer pick an option. Instead the simple direction has changed to a "Game Over" and their final score displayed. It also generates a "Play Again" button if the player decides to go for another round. Resetting the simple direction, lives and score, and allows the user to select their choices again. 

## Features

- When the user hovers their cursor over the choice they want to make, an effect is created to make the choice smaller, imitating a click from the user. 
- The "Play Again" button once the game is over is created with a darker blue background. When the user hovers their cursor over the button, the colours reverse so the background becomes a very pale grey and the font is the darker blue. 

### Imagery

- I found the background on a free vector site. I used a vector for its ability to stay clear when scaling to larger screen sizes. The only requirement to use this wallpaper was to give Attribution - [Space Vectors by Vecteezy](https://www.vecteezy.com/free-vector/space").
- For each of the icons representing the choices, I used a free png website.

    - [Rock](https://www.pngegg.com/en/png-znsrz)
    - [Paper](http://clipart-library.com/clipart/878063.htm)
    - [Scissors](https://www.pngegg.com/en/png-bqypv)
    - [Lizard](http://clipart-library.com/clip-art/170-1704916_lizard-clipart-clipart-images-of-lizard.htm)
    - [Spock](https://www.pngegg.com/en/png-kgqzw)

- For the favicon icon I've used a free one from [FontAwesome](https://fontawesome.com/icons/rocket-launch?s=solid&f=classic) as an SVG file.

### Responsiveness

I've designed the website to be responsive from an iPhone SE screen size, up to an iMac5K. This has been done using @media screen and (min-width:).

The font was chosen with accessibility in mind. Since it is a sans-serif style font it should be viewed by almost everyone. 

The contrast between the font text colour and background are distinct enough to be easily distinguished from each other.

### Future Features

- I'd like to be able to implement a submit button along with the countdown after player selection.
- The lives as objects that remove as per loss.

## Technologies Used

- [JSHint](https://jshint.com) - Used to test JS code for errors.
- [W3C Markup Validation](https://validator.w3.org) - Used to check the HTML code for errors.
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_input) - Used to check the CSS code for errors.
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) - VS Code Extension used to clean up code.
- [FontAwesome](https://fontawesome.com) - Used to find an icon for the Favicon.
- [GitHub](https://github.com) - Used to push the website to pages. And for version control. 
- [GoogleFonts](https://fonts.google.com) - Used to source an appropriate font for the page.
- [LightHouse](https://developer.chrome.com/docs/lighthouse/overview/) - A built in Chrome tool used to check the quality of the webpage.

## Testing

- I have confirmed the website works on multiple browsers including Chrome, Safari and Firefox.
- I have confirmed it renders correctly on mobile devices.

### Validator Testing

I have used multiple code testers to check all three of the files.

- W3C Markup Validator showed no errors and only one warning which pertained to a section not having it's own header, which I believed didn't require one.
- W3C CSS Validation reported no errors.
- JSHint showed no major errors and only minor recommendations. 

After checking with Chrome's built-in Lighthouse tool it confirms everything is up-to-spec.
![LightHouse Report](/media/lighthouse.png)

| Test Label    | Test Action   | Expected Outcome  | Test Outcome |
|---------------|---------------|-------------------|--------------|
| Game Setup    | Page Loads    | Button layout shows with appropriate options to choose from   | PASS  | --------------------------------
| Game Start    | User clicks on one of the five options presented to them  | Users choice appears below with the computers choice next to it   | PASS  | 
| Lives and Score Counters  | User clicks on one of the options to see if the result was win/loss/draw  | Lives decrement from three by one if the player lost. Score increments by one if a win. No change made if there's a draw  | PASS | 
Play Again    | Play Again button appears when lives reach 0 | Once the players lives reach 0 the buttons become inactive and a Game Over message appears with the players score below. A Play Again button also appears which the player can click to restart the game | PASS 
| 404 Page  | User visits incorrect page | Website loads with no content except for a message and a link back to the homepage | PASS

#### Further Testing

- The hover effects on the buttons all work.

## Deployment

This website was developed using [VS Studio Code](https://code.visualstudio.com). It was added, committed and pushed using git to a GitHub repository.

To deploy the project to GitHub Pages from [the repository](https://github.com/Kuurosu/rock-paper-scissors-lizard-spock) you can do the following:

1. Log into [GitHub](https://github.com).
2. Select the repository that you would like to deploy.
3. Click the Settings tab.
4. Find Pages in the left tab.
5. Make sure it's selected on "Deploy from branch".
6. Under Branch, Change "None" to main and Save.
7. It may take a few minutes for GitHub to deploy the page. Once completed there will be a link to the top that will bring you to your deployed page. 

### How to run the project locally

If you would like to clone this repository you will need the following: 

1. A [Github Account](https://github.com/).
2. Either [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-GB/firefox/new/?redirect_source=firefox-com) as your browser.
3. Install the Gitpod extension for your preferred browser: [Chrome](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) or [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/gitpod/).
4. Restart your browser.
5. Log into [Gitpod](https://gitpod.io/login/).
6. Open the [repository](https://github.com/Kuurosu/rock-paper-scissors-lizard-spock).
7. There will now be a Gitpod button at the top of the repository. 
8. Click it and it will open a new tab using Gitpod and create a workstation cloned from the original repository where you can edit it locally.

If you choose to use a local IDE such as VS Code etc. you can follow the steps below:

1. Navigate to [GitHub CLI](https://cli.github.com).
2. On Mac, copy ```brew install gh``` On Windows, copy ```winget install --id GitHub.cli``` (You will need [HomeBrew](https://brew.sh) previously installed for Mac, or [WinGet](https://github.com/microsoft/winget-cli) previously installed for Windows.)
3. Paste the OS appropriate code into Terminal (Mac) or CMD prompt (Windows).
4. This will take a few minutes to install the appropriate GitHub CLI onto your PC.
5. Once completed, open the [repository](https://github.com/Kuurosu/rock-paper-scissors-lizard-spock).
6. Click the green "Code" icon.
7. Click GitHub CLI tab.
8. Copy the link.
9. In your preferred IDE, create or navigate to a directory you would like to clone the repository to.
11. Open the IDE Terminal and paste the link from step 8. 
```
gh repo clone Kuurosu/rock-paper-scissors-lizard-spock
```
12. Press enter and it should clone the repository for you to work with locally. 

Any issues or troubleshooting with GitHub CLI can be found [here](https://cli.github.com/manual/).

### Using Git to push changes to your repository 

To add updates from your local IDE to the repository you can use Git in the terminal to assist you with this:

1. Open the Terminal.
2. Type ```git add (insert file name here e.g. index.html)``` and press enter (You can also use ```git add .``` to add all files that have been modified).
3. Type ```git commit -m "(insert a meaningful commit message here)"``` and press enter.
4. When you're ready to push the commits, you can do so by typing ```git push``` and press enter.

## Credits

- I'd like to thank my mentor Brian Macharia for assisting me with the format of my code and reviews.

### Media

- All media has been linked to the appropriate website of where it had been taken from.
- Vecteezy for allowing the background to be provided for free - [Space Vectors by Vecteezy](https://www.vecteezy.com/free-vector/space")

### Content

- I was struggling to figure out how to disable the buttons. This [W3Schools guide](https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp) helped with that.
- I learnt how to create an element with an ID using .setAttribute() from this [Stack Overflow page](https://stackoverflow.com/questions/9422974/createelement-with-id). 