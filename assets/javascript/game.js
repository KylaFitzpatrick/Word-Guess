
// Creates an array that lists out all of animal choices 
var animalChoice = ["Elephant", "Tiger", "Bear", "Bird", "Dog", "Horse", "Pig", "Sheep", "Cat", "Cow"];

// Creating variables to hold the number of wins, guesses, and letters. They start at 0.
var word = [];
var wins = 0;
var guessedLetters = [];
var lettersLeft = [];
var underscore = [];

resetGame();
display();

// 5. Press any key to get started!
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

    // Randomly chooses a choice from the options array. 
    var animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];
    // underscore.push(animalGuess);

    //  create underscores based on word animalchoice
    //    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    if(animalGuess === "Elephant"){
        underscore();
    }

    //find userguess letters that match animal guess
    //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
    if (userGuess === animalGuess()) {
        userGuess();

    }

    // if user guesses one letter equal to a letter in animal word
    // 6. Wins: (# of times user guessed the word correctly).
    if (userGuess === animalGuess) {
        win();
       
    // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
    } else if (userGuess < animalGuess.charAt()) {
       lettersLeft();

    // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
    } else{
        guessedLetters();
    }
    // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
    if ((userGuess === animalGuess) || (userGuess !== animalGuess)) {
        resetGame();
    
    }
        display();
}

    // Create variables that hold references to the places in the HTML where we want to display things.
    // Display the user and computer guesses, and wins/guesses/letters.
    function display() {
        // var userChoiceText = document.getElementById("userchoice-text");
        // var animalChoiceText = document.getElementById("animalchoice-text");
        var winsText = document.getElementById("wins-text");
        var guessesText = document.getElementById("guesses-text");
        var lettersText = document.getElementById("letters-text");
        // userChoiceText.innerHTML = userGuess.join('');
        // animalChoiceText.innerHTML = userGuess;
        winsText.innerHTML = wins;
        guessesText.innerHTML = lettersLeft;
        lettersText.innerHTML = guessedLetters;
    }
    function underscore(){
        underscore = animalGuess.replace(animalGuess[i],'_');
        
    }
     function userGuess() {
        userGuess = animalGuess[i].split('');
        
    }
    function win(){
        wins++;
        // resetGame();
    }
    function lettersLeft(){
        lettersLeft++;
        
    }
    function guessedLetters(){
        guessedLetters = userGuess.toUpperCase();
        
    }
    // function anotherWord(){
    //     animalGuess++;
    //     display();
    // }


    function resetGame() {
        guessesLeft = 10;
        guessedLetters = [];
        animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];
        console.log("Letter to guess: " + animalGuess);
      }





