// NUMBER GUESSING GAME

let minNum = 1;
let maxNum = 50;
let randomAnswer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const enterBtn = document.getElementById("submitBtn");
const textInfo = document.getElementById("textInfo");
const helper = document.getElementById("helper");
let guess;
let guessValue;
let attempts = 0;
let running = false;

console.log(randomAnswer);

function guessChecker() {
  if (guessValue > randomAnswer) {
    helper.textContent = `Guess was too high`;
  } else if (guessValue < randomAnswer) {
    helper.textContent = `Guess was too low`;
  } else if (guessValue === randomAnswer) {
    textInfo.textContent = ``;
    helper.textContent = `You win!`;
    running = false;
  }
}

enterBtn.onclick = function () {
  if (!running) {
    running = true;
    attempts = 0;
    textInfo.textContent = "";
    helper.textContent = "";
    randomAnswer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log(randomAnswer);
  }
  guess = document.getElementById("userInput");
  guessValue = Number(guess.value);

  if (isNaN(guessValue)) {
    textInfo.textContent = `That is not a number`;
  } else if (guessValue < minNum || guessValue > maxNum) {
    textInfo.textContent = `You went below, or above the restrictions. Try again`;
  } else {
    attempts++;
    guessChecker();
  }
};
