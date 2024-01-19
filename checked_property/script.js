const myCheckBox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subed!`;
  } else {
    subResult.textContent = `You are not subed!`;
  }
  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with Mastercard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};
