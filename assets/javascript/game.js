
                // Creates an array that lists out all of animal choices 
                var animalChoice = ["Elephant", "Tiger", "Bear", "Bird", "Dog", "Horse", "Pig", "Sheep", "Cat", "Cow"]

                    // Creating variables to hold the number of wins, guesses, and letters. They start at 0.
                    var wins = 0;
                    var guesses = 0;
                    var letters = 0;

                    // Create variables that hold references to the places in the HTML where we want to display things.
                    var directionsText = document.getElementById("directions-text");
                    var userChoiceText = document.getElementById("userchoice-text");
                    var animalChoiceText = document.getElementById("animalchoice-text");
                    var winsText = document.getElementById("wins-text");
                    var gussesText = document.getElementById("guesses-text");
                    var lettersText = document.getElementById("letters-text");

                    // 5. Press any key to get started!
                    // This function is run whenever the user presses a key.
                    document.onkeyup = function (event) {

                        // Determines which key was pressed.
                        var userGuess = event.key;

                        // Randomly chooses a choice from the options array. 
                        var animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];

                        // Reworked our code from last step to use "else if" instead of lots of if statements.

                        // if user guesses one letter equal to a letter in animal word
                        if (userGuess.value.match(animalGuess[""])) {
                            // 6. Wins: (# of times user guessed the word correctly).
                            //    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
                            //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
                                wins++;
                            } else if (userGuess != animalGuess) {
                                // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
                                guesses--;
                            } else {
                                // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
                                letters++;
                            }
                            // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
                            if((userGuess === wins) || (userGuess != animalGuess)){
                                animalGuess;

                            }


                            // Display the user and computer guesses, and wins/guesses/letters.
                            userChoiceText.textContent = userGuess;
                            animalChoiceText.textContent = animalGuess;
                            winsText.textContent = "Wins: " + wins;
                            guessesText.textContent = "Number of Guesses Remaining: " + guesses;
                            lettersText.textContent = "Letters Already Guessed: " + letters;
                            
      
                    };




