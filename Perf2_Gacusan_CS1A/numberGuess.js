let secretNumber = 7; // You can change this
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
  } else if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  }
} while (guess !== secretNumber);

console.log("Correct!");
