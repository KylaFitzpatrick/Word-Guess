
// Creates an array that lists out all of animal choices 
var animalChoice = ["Elephant", "Tiger", "Bear", "Bird", "Dog", "Horse", "Pig", "Sheep", "Cat", "Cow"];

// Creating variables to hold the number of wins, guesses, and letters. They start at 0.
var userGuess = [];
var wins = 0;
var guessedLetters = [];
var lettersLeft = [];
var underscore = [];

resetGame();
display();


    // Create variables that hold references to the places in the HTML where we want to display things.
    // Display the user and computer guesses, and wins/guesses/letters.
    function display() {
        var userChoiceText = document.getElementById("userchoice-text");
        console.log(userChoiceText);
        // var animalChoiceText = document.getElementById("animalchoice-text");
        var winsText = document.getElementById("wins-text");
        var guessesText = document.getElementById("guesses-text");
        var lettersText = document.getElementById("letters-text");

    }
    function underscore(){
        var underscore = animalGuess.replace(animalGuess[i],'_');
        console.log(underscore);
    }
     function userGuess() {
        var userGuess = animalGuess[i].split('');
        console.log(userGuess);
    }
    function win(){
        wins++;
        // resetGame();
    }
    function lettersLeft(){
        var lettersLeft = animalGuess;
        for (var i=0; i < lettersLeft; i++) 
            lettersLeft--;
        console.log(lettersLeft);
        
    }
    //storing the userguess as guessed letters
    function guessedLetters(){
        var guessedLetters = userGuess.push([]).toUpperCase();
        return guessedLetters;
        console.log(guessedLetters);
        
    }
    // function anotherWord(){
    //     animalGuess++;
    //     display();
    // }

   
    function resetGame() {
        lettersLeft = 10;
        guessedLetters = [];
        animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];
        console.log("Letter to guess: " + animalGuess);
      }
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
    if (userGuess === animalGuess) {
        underscore();

    }

    // if user guesses one letter equal to a letter in animal word
    // 6. Wins: (# of times user guessed the word correctly).
    if (userGuess === animalGuess) {
        win();
        console.log(wins);
       
    // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
    } if (userGuess < animalGuess.length) {
       lettersLeft();
       console.log(lettersLeft);

    // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
    } if (userGuess !== animalGuess) {
        guessedLetters();
        console.log(guessedLetters);
    }

    // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
    if ((userGuess === animalGuess) || (userGuess !== animalGuess)) {
        resetGame();
    
    }
    userChoiceText = userGuess;
    winsText = wins;
    guessesText = lettersLeft;
    lettersText = guessedLetters;

};   


