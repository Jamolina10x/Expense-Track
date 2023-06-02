"use strict";
// Inputs Elements
const inputName = document.getElementById("name-input");
const inputDate = document.getElementById("date-input");
const inputAmount = document.getElementById("amount-input");
// Table Elements
const table = document.getElementById("table");
// Buttons Elements
const btn = document.querySelector(".add-expense-btn");
const btnEl = `<button id="cancelBtn" class="cancelBtn">x</button>`;

const noExpAdded = document.querySelector(".no-exp");

const tBody = document.querySelector(".tbody");

// Function to dislay empty row
const insertNoDataRow = function () {
  // console.log(tBody);
  // console.log(tBody.children.length);

  if (tBody.children.length === 1 || tBody.children.length < 2) {
    // noExpAdded.classList.add("hidden");
    noExpAdded.classList.remove("hidden");
  } else {
    noExpAdded.classList.add("hidden");
    // noExpAdded.remove();
  }
};
/////////////////////////////////////////
console.log(inputName.value);
console.log(inputDate.value);
console.log(inputAmount.value);

// function to be notified when no input value
// const noInputValue = function () {
//   if (
//     inputName.value === "" &&
//     inputDate.value === ""
//     // inputAmount.value === ""
//   )
//     return alert("No input data!");
// };
//////////////////////////////////////////

// The Table Row function
const addRow = function (e) {
  e.preventDefault();

  // Creating the table row
  const tableRow = table.insertRow();
  const nameCell = tableRow.insertCell(0);
  const dateCell = tableRow.insertCell(1);
  const amountCell = tableRow.insertCell(2);
  const emptyCell = tableRow.insertCell(3);
  // Add input value to the Cell
  nameCell.innerHTML = inputName.value;
  dateCell.textContent = inputDate.value;
  amountCell.innerHTML = "$" + inputAmount.value;

  // Empty the input field after submitted
  inputName.value = "";
  inputDate.value = "";
  inputAmount.value = "";

  // Table row background Color
  tableRow.style.backgroundColor = "rgba(245, 245, 245, 0.842)";
  // Add btn to the empty cell
  emptyCell.insertAdjacentHTML("beforeend", btnEl);

  const canAllBtns = document.querySelectorAll(".cancelBtn");
  // loop to remove a row of expense
  canAllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnEl = btn.parentNode.parentNode;
      insertNoDataRow();
      btnEl.remove();
    });
  });
  insertNoDataRow();
};
// Check the Input data Status
// const checkStatus = () => {
//   if (!noInputValue()) {
//     addRow();
//   }
// };

// document.addEventListener("DOMContentLoaded", () => {
btn.addEventListener("click", addRow);
// });

// btn.addEventListener("click", noInputValue);
