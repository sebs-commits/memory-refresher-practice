// every button input to show on display
// number input
const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const historyContainer = document.getElementById("historyContainer");
let history = [];
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
    const equation = display.value;
    const result = eval(equation);
    display.value = result;
    addToHistory(equation + " = " + result);
  } catch (error) {
    alert("Error: " + error + "\nPlease try again.");
  }
}
// added history
function updateHistoryList() {
  historyList.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = history[i];
    historyList.appendChild(listItem);
  }
}
function showHistory() {
  if (historyContainer.style.display === "none") {
    historyContainer.style.display = "block";
  } else {
    historyContainer.style.display = "none";
  }
}
function addToHistory(result) {
  history.push(result);
  updateHistoryList();
}
