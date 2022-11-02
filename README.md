#
Rock Paper Lizard Spock

    [Link to game](https: //kuurosu.github.io/rock-paper-scissors-lizard-spock/)

        ##Description

        This is a website designed to
        let the user play the game "Rock, Paper, Scissors, Lizard, Spock".A more evolved version of the basic, "Rock, Paper, Scissors".

        The game was originally designed by Sam Kass in 1998. It had grown in popularity after an episode of "The Big Bang Theory"
        where the character "Sheldon"
        explains to the rest of the crew the rules of the game(Episode - The Rothman Disintegration).

        I have designed this game to allow players to
        try their luck against an computer player who will randomly select one of the five options available.

        ###Overview

        When you visit the website you are presented with five options to choose from.

        ![Choices](/media/choice - area.png)

        I chose simple images to distinguish what each button represents.They are all clickable and have a hover effect when a cursor is placed over it.

        The rules on how to play are as follows:

        -Rock beats Scissors -
        Rock beats Lizard -
        Paper beats Rock -
        Paper beats Spock -
        Scissors beats Paper -
        Scissors beats Lizard -
        Lizard beats Paper -
        Lizard beats Spock -
        Spock beats Rock -
        Spock beats Scissors

        Upon chooses an option, a result will appear displaying whether you have won, lost, or drawn.There will also be a side - by - side result of the image the player picked and one that the computer picked
        for a more visual representation of what happened.

        ![Choice Result](/media/choice - result.png)

        Below the results of the players choices, is a lives, and score.Initially the player starts with three lives and must keep winning to accumulate a higher score.For every loss the player receives a minus - one is adjusted to the players total lives.When this hits zero, the game is stopped and the player is presented with their score at the top and a play again button is created.It also stops the player from selecting any more options.

        ![Lives and Score](/media/lives - score.png)

        Upon hitting "Play Again", the players score is reset to zero, lives reset to three, and the buttons become selectable again.

        ![Game Over](/media/game - over.png)

        Below the lives and score, is also a quick explanation of how to play the game, quoted from the show "The Big Bang Theory".

        ![How To Play](/media/how - to - play.png)

        ## Mockup VS Final Design

        Initially I planned on having the choices below the results and
        for there to be a countdown to when the results would be displayed.There was also going to be a more in -depth lives system where there would be three objects and one would be removed per loss.At my current level this was proving to be too difficult and was taking up too much time.In the future, I hope to be able to come up with a simple, yet efficient way to implement this.

        ![Mockup](/media/game - screen.png)

        Instead, the final design was something I was happy with, and proved to work on different screen sizes.

        ![Final Design](/media/responsive.png)

        ## Design

        I used a plain darker blue / purple colour to display the important content against a colourful space background.As to not be too distracting
        for the user, but still allow the pleasure of immersing themselves into an out - of -this - world experience.

        ###Font

        I chose Kanit Regular 400, a rigid, yet curvy font to allow users to easily read what was on screen and used a very, very pale grey colour(almost white) to be easily seen against the darker background.

        This font was acquired from Google Fonts.

        ``
        ` Font
`
        @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
        ``
        `
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

