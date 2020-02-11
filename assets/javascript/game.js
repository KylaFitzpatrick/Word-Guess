    var words = [
        "ELEPHANT",
        "TIGER",
        "BEAR",
        "BIRD",
        "GIRAFFE",
        "HORSE",
        "PIG",
        "SHEEP",
        "COW"];

    var wins = 0;
    var guessedLetters = [];
    var lettersLeft = [];
    var answerArray = [];

    display();
    resetGame();

    window.addEventListener('load', display, false);
    
    function display(){
    var answerText = document.getElementById("answer-text");
    console.log(answerText);
    // var animalChoiceText = document.getElementById("animalchoice-text");
    var winsText = document.getElementById("wins-text");
    var guessesText = document.getElementById("guesses-text");
    var lettersText = document.getElementById("letters-text");
    answerText.innerHTML = answerArray.join(' ');
    console.log(answerText);
    winsText.innerHTML = wins;
    console.log(winsText);
    guessesText.innerHTML = lettersLeft;
    console.log(guessesText);
    lettersText.innerHTML = guessedLetters;
    console.log(lettersText);
    }
    function resetGame() {
        lettersLeft = 10;
        guessedLetters = [];
        answerArray = word[Math.floor(Math.random() * word.length)];
        console.log("Letter to guess: " + answerArray);
    }
    // 5. Press any key to get started!
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase(); 

    // Randomly chooses a choice from the options array.
    var word = words[Math.floor(Math.random() * words.length)];

    //  create underscores based on word animalchoice
    //    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }

    //find userguess letters that match animal guess
    //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
    var lettersLeft = word.length;
    // The game loop
        while (lettersLeft > 0) {
    // Show the player their progress
        answerArray.join(" ");
        // guess from user
        var userGuess = [];
        if (userGuess === null) {
        // dont do anything if user doesn't guess anything
            break;
        //user guesses a letter uppercase
        } else if (userGuess.length === 1 && userGuess.match(/[a-z]/i)) {
            return userGuess.toUpperCase();
            console.log(userGuess);
        } else {
        // display letter guessed correctly/incorrectly
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                lettersLeft--;
                guessedLetters.push(userGuess);
        
                }
            }
        }
        
        // if user guesses one letter equal to a letter in animal word
        // 6. Wins: (# of times user guessed the word correctly) and rest game
        if(userGuess === answerArray){
            wins++;
            resetGame();
        }
        // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
        var lettersLeft = [];
            for (var i=0; i < answerArray; i++) 
                lettersLeft--;
            console.log(lettersLeft);

        // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

            // 9. After the user wins/loses the game should automatically choose another word and make the user play it.


    
    }
    display();

};
