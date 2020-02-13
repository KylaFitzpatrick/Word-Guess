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
var word = words[Math.floor(Math.random() * words.length)];

// // * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
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
lettersText.innerHTML = guessedLetters;
console.log(lettersText);
}
// // * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
function resetGame() {
    lettersLeft = 10;
    guessedLetters = [];
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

    var remainingLetters = word.length;
    // The game loop
        while (remainingLetters > 0) {
    // Show the player their progress
        answerArray.join(" ");

    // guess from user
    if (userGuess === null) {
        // Exit the game loop
        break;
        } else {
        // display letter guessed correctly add letter in index of array
        // if user guesses one letter equal to a letter in animal word
            for (var i = 0; i < word.length; i++) {
                if (word[i] === userGuess) {
                answerArray[i] = userGuess;
                remainingLetters--;
                }
            }
        }
    }
    
    if(userGuess === answerArray){
        guessedLetters.push(userGuess);
    }
      // 6. Wins: (# of times user guessed the word correctly) and rest game
    if(remainingLetters === 0){
        wins++;
        // resetGame();
    // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
    }else if(userGuess !== answerArray){
        lettersLeft--;
    }
}
    // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
    

    // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
    // }else if(remainingLetters === 0 || lettersLeft === 0){
    //     resetGame();
    // }
    
// };
    
//     //find userguess letters that match animal guess
//     //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
//     function remainingLetters(){
//     var remainingLetters = word.length;
//     // The game loop
//         while (remainingLetters > 0) {
//     // Show the player their progress
//         answerArray.join(" ");
//     // guess from user
//     if (userGuess === null) {
//         // Exit the game loop
//         break;
//         } else {
//         // display letter guessed correctly add letter in index of array
//         // if user guesses one letter equal to a letter in animal word
//             for (var i = 0; i < word.length; i++) {
//                 if (word[i] === userGuess) {
//                 answerArray[i] = userGuess;
//                 remainingLetters--;
//                 }
//             }
//         }
//     }
// }