
                // Creates an array that lists out all of animal choices 
                var animalChoice = ["Elephant", "Tiger", "Bear", "Bird", "Dog", "Horse", "Pig", "Sheep", "Cat", "Cow"];

                    // Creating variables to hold the number of wins, guesses, and letters. They start at 0.
                    var animalLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                    var wins = 0;
                    var guessedLetters = [];
                    var lettersLeft = 0;
                    var underscore = ["_"];

                    // resetGame();
                    // display();

                    // 5. Press any key to get started!
                    // This function is run whenever the user presses a key.
                    document.onkeyup = function (event) {

                        // Determines which key was pressed.
                        var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
                        underscore.push(userGuess);
                        // Randomly chooses a choice from the options array. 
                        var animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];
                        

                        // create underscores based on word animalchoice
                        function animalGuess() {
                            for(let i=0; i < animalsGuess.length; i++){
                                underscore.push('_');
                            }
                        }
                        
                        // if user guesses one letter equal to a letter in animal word
                            
                            if(userGuess === animalGuess) {
                        
                            // 6. Wins: (# of times user guessed the word correctly).
                            //    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
                            //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
                                wins++;
                                display();
                            } else if (lettersLeft -1 === 0) {
                                // 7. Number of Guesses Remaining: (# of guesses remaining for the user).
                                lettersLeft--;
                                display();
                            } else {
                                // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
                                guessedLetters++;
                                display();
                            }
                            // 9. After the user wins/loses the game should automatically choose another word and make the user play it.
                            if((userGuess === animalGuess) || (userGuess != animalGuess)){
                                animalGuess ++;
                                display();

                            }
                            
                   
                    

                    // Create variables that hold references to the places in the HTML where we want to display things.
                    // Display the user and computer guesses, and wins/guesses/letters.
                    function display (){
                        var userChoiceText = document.getElementById("userchoice-text");
                        var animalChoiceText = document.getElementById("animalchoice-text");
                        var winsText = document.getElementById("wins-text");
                        var guessesText = document.getElementById("guesses-text");
                        var lettersText = document.getElementById("letters-text");
                        userChoiceText.innerHTML = userGuess;
                        animalChoiceText.tinnerHTML = animalGuess;
                        winsText.innerHTML = wins;
                        guessesText.innerHTML = lettersLeft;
                        lettersText.innerHTML = guessedLetters.join(",");
                        }

                        function resetGame() {
                            guessedLetters = [];
                            animalGuess = animalChoice[Math.floor(Math.random() * animalChoice.length)];
                            console.log("Letter to guess: " + animalGuess);
                          }
                    };




