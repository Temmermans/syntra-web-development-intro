/**
 * Build a guessing game:
 *  1. A user can enter a number
    2. The system picks a random number from 1 to 6
    3. If the user's number is equal to a random number, give the user 2 points
    4. If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
    5. The user can play the game as long as they want to
 */

let userScore = 0;

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userInput = parseInt(prompt("Enter a number (1 - 6)"));

    if (userInput > 6) {
      alert("Your number is too high.");
      return handleGuess();
    }

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (userInput === randomNumber) {
      userScore = userScore + 2;
    }
    if (userInput + 1 === randomNumber || userInput - 1 === randomNumber) {
      userScore = userScore + 1;
    }
    resolve(userScore);
  });
};
const continueGame = () => {
  return new Promise((resolve, reject) => {
    const c = confirm(`Your score is ${userScore}. Do you want to continue?`);
    if (c) {
      resolve();
    } else {
      reject();
    }
  });
};
const handleGuess = () => {
  enterNumber()
    .then(() => continueGame())
    .then(() => handleGuess())
    .catch(() => alert("You are done."));
};

handleGuess();
