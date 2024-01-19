const convertBtn = document.getElementById("convertBtn");
const toCel = document.getElementById("farToCel");
const toFar = document.getElementById("celToFar");
// user input must be converted to number
let userInput = document.getElementById("userInput");
let finalConversion;
let result;
// logic
// get user input. get user selection. input user value into function based off of selection.
// celcius = far - 32 * 5/9
function farToCel(userInput) {
  return (userInput - 32) * (5 / 9);
}
// far = celcius * 9/5 + 32
function celToFar(userInput) {
  return userInput * (9 / 5) + 32;
}

convertBtn.onclick = function () {
  let userInputValue = Number(userInput.value);
  finalConversion = document.getElementById("finalConversion");
  if (toCel.checked) {
    result = farToCel(userInputValue);
    finalConversion.textContent = `${parseInt(result)} C`;
  } else if (toFar.checked) {
    result = celToFar(userInputValue);
    finalConversion.textContent = `${parseInt(result)} F`;
  } else if (isNaN(userInputValue)) {
    finalConversion.textContent = `Select a unit`;
  }
};
// tests
// console.log(celToFar(5));
// console.log(farToCel(41));
