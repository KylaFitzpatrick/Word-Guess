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
var lettersLeft = 10;
// // Randomly chooses a choice from the options array.
var word = [];
var answerArray = [];


display();
resetGame();

window.addEventListener('load', display, false);

function display(){
var answerText = document.getElementById("answer-text");
console.log(answerText);
var winsText = document.getElementById("wins-text");
console.log(winsText);
var guessesText = document.getElementById("guesses-text");
console.log(guessesText);
var lettersText = document.getElementById("letters-text");
console.log(lettersText);
answerText.innerHTML = answerArray.join(" ");
console.log(answerText);
winsText.innerHTML = wins;
console.log(winsText);
guessesText.innerHTML = lettersLeft;
console.log(guessesText);
lettersText.innerHTML = guessedLetters.join(" ");
console.log(lettersText);
}
// // * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
function resetGame() {
    lettersLeft = 10;
    guessedLetters = [];
    answerArray = [];
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray[i] = "_") 
 }
    console.log("Letter to guess: " + word);
} 



// 5. Press any key to get started!
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase(); 
    var guess = userGuess;
    
     //     alert("Please enter a single letter.");
    var letters = /^[A-Za-z]+$/;
        if(guess.match(letters))
        {
        guess
        }else{
            alert("Please enter a letter");
        }
    
    //display guess in index of array
    
    for (var i = 0; i < word.length; i++) {       
        if(word[i] === guess){
        answerArray[i] = guess;
        }
    }

     // 6. Wins: (# of times user guessed the word correctly) and rest game
    
        if (answerArray.join("") === word){
        wins++;
        }
        if(word === "Elephant" && wins > 0){
            
        }

        // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
        // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
        //check if characters are letters
        if (guess !== word[i]){
            guessedLetters.push(guess);
            lettersLeft--;
        }
        
        if(answerArray[i] === word[i]){
            lettersLeft++;
        }
        
        // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
        // // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
        if(answerArray.join("") === word || lettersLeft === 0){
            resetGame();
        }
            display();
        };

