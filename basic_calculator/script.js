// every button input to show on display
// number input
const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
function addBtn(input) {
  intOne = parseInt(display.value);
  return intOne + parseInt(input);
}
function reset() {
  display.value = ``;
}
function equal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert(error + "\n Try again!");
  }
}
