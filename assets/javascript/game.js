    //Variables for Psychic Game

    var psychLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var Win = 0;
    var Lose = 0;
    var guessesRemaining = 10;
    var guessedLetters = []; // An Array that will keep track of key letters entered 

    document.onkeyup = function(event) {
    var userGuess = event.key; // Gathers user's guessed key letters 
    guessedLetters.push(userGuess); // The push() method adds new items to the end of an array, and returns the new length.    
    var psychicAnswer = psychLetters[Math.floor(Math.random() * psychLetters.length)];

    //Clears the amount Guess Key Letters when they reach the end of their left # of guesses left
    var reset = function() {
      guessesRemaining = 10;
      guessedLetters = []; 
    }

    //If the user's guess matches the psychic's guess, the user's winning score will add
    if (userGuess === psychicAnswer) {
      Win++;
      guessesRemaining = 9;
    }
    //If the user's guess doesn't match the psychic's guess, the number of guesses remaining will be deducted
    else {
      guessesRemaining--;
    }

    //If the user's guess equals 0 and runs out, the user loses and their guesses will start over for the user to try again 
    if (guessesRemaining === 0){
      Lose++;
      guessesRemaining = 9;
      reset();
    }

    var html = "<p>Guess what letter I'm thinking of...</p>" + "<p>Wins: " + Win + "</p>" + "<p>Loses: "+ Lose + "<p>Guesses Left: " + guessesRemaining + "<p>Your Guesses so far: " +  guessedLetters.join(', '); //Reveal guessed letters here
     document.getElementById("psychicInfo").innerHTML = html;
  }