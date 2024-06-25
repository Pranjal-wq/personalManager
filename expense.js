let totalExpense = 0;
const inputAmount = document.querySelector("#addExpense");
const inputDesc = document.querySelector("#addDesc");
const textTotal = document.querySelector("#expenseDisplay");
const expenseTable = document.querySelector("#expenseTable");

textTotal.textContent = `Expense: ${totalExpense} ₹`;

const allExpense = [];

function expenseConverter() {
  const textDesc = inputDesc.value;
  const textAmount = inputAmount.value;
  const expense = parseInt(textAmount, 10);

  if (!isNaN(expense) && expense > 0 && textDesc.trim() !== "") {
    const oneExpense = {
      desc: textDesc,
      amount: expense,
      moment: new Date()
    };

    allExpense.push(oneExpense);
    totalExpense += expense;
    textTotal.textContent = `Expense: ${totalExpense} ₹`;

    render(allExpense);

    // Clear the input fields after adding the expense
    inputAmount.value = "";
    inputDesc.value = "";
  } else {
    alert("Please enter a valid description and amount.");
  }
}

function deleted(dateValue) {
  const newArray = allExpense.filter((expense) => expense.moment.valueOf() !== dateValue);
  
  // Update totalExpense
  totalExpense = newArray.reduce((acc, expense) => acc + expense.amount, 0);
  textTotal.textContent = `Expense: ${totalExpense} ₹`;

  // Update the allExpense array
  allExpense.length = 0; // Clear the array without losing reference
  allExpense.push(...newArray); // Add the new filtered expenses

  render(allExpense);
}

function render(array) {
  const allExpenseHTML = array.map((expense) => viewLayer(expense));
  const joinedHTML = allExpenseHTML.join("");
  expenseTable.innerHTML = joinedHTML;
}

function dateDisplay(moment) {
  return moment.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  });
}

function viewLayer({ desc, amount, moment }) {
  return `<li class="list-group-item d-flex justify-content-between">
              <div class="d-flex flex-column">
                  ${desc}
                  <small class="text-muted">${dateDisplay(moment)}</small>
              </div>
              <div>
                  <span class="px-5">
                  ${amount} ₹
                  </span>
                  <button 
                      onclick="deleted(${moment.valueOf()})" 
                      type="button" 
                      class="btn btn-outline-danger btn-sm">
                      <i class="fas fa-trash-alt"></i>
                  </button>
              </div>
          </li>`;
}

const element = document.querySelector("#btnCounter");
element.addEventListener("click", expenseConverter, false);
