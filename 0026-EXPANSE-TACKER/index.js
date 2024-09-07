// // Expense Tracker Application

// document.addEventListener('DOMContentLoaded', () => {
//     const expenseForm = document.getElementById('expense-form');
//     const expenseList = document.getElementById('expense-list');
//     const totalAmount = document.getElementById('total-amount');

//     let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

//     const updateExpenseList = () => {
//         expenseList.innerHTML = '';
//         let total = 0;

//         expenses.forEach((expense, index) => {
//             const row = document.createElement('tr');

//             row.innerHTML = `
//                 <td>${expense.category}</td>
//                 <td>$${expense.amount.toFixed(2)}</td>
//                 <td>${expense.date}</td>
//                 <td>${expense.description}</td>
//                 <td>
//                     <button onclick="deleteExpense(${index})">Delete</button>
//                 </td>
//             `;

//             expenseList.appendChild(row);
//             total += parseFloat(expense.amount);
//         });

//         totalAmount.textContent = total.toFixed(2);
//         localStorage.setItem('expenses', JSON.stringify(expenses));
//     };

//     const deleteExpense = (index) => {
//         expenses.splice(index, 1);
//         updateExpenseList();
//     };

//     window.deleteExpense = deleteExpense;

//     expenseForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const category = document.getElementById('expense-category').value;
//         const amount = parseFloat(document.getElementById('expense-amount').value);
//         const date = document.getElementById('expense-date').value;
//         const description = document.getElementById('expense-description').value;

//         expenses.push({ category, amount, date, description });
//         updateExpenseList();

//         expenseForm.reset();
//     });

//     updateExpenseList();
// });


// ************************************************************************



// Get references to DOM elements
// const category = document.getElementById('expense-category');
// const amount = document.getElementById('expense-amount');
// const dates = document.getElementById('expense-date');
// const description = document.getElementById('expense-description');
// const list = document.getElementById('expense-list');
// const total = document.getElementById('total-amount');
// const add = document.getElementById('add');

// // Load existing expenses or initialize an empty array
// let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// // Function to add new expense
// const addExpenses = () => {
//     const newExpense = {
//         category: category.value,
//         amount: parseFloat(amount.value),
//         date: dates.value,
//         description: description.value
//     };

//     // Add new expense to the list and update the UI
//     expenses.push(newExpense);
//     updateUI();

//     // Reset form
//     category.value = '';
//     amount.value = '';
//     dates.value = '';
//     description.value = '';
// };

// // Function to remove an expense
// const removeSummary = (id) => {
//     // Remove the expense by index
//     expenses.splice(id, 1);
//     updateUI();
// };

// // Function to update the expense list and total
// const updateUI = () => {
//     // Clear the current list
//     list.innerHTML = '';

//     // Render each expense
//     expenses.forEach((expense, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${expense.category}</td>
//             <td>$${expense.amount.toFixed(2)}</td>
//             <td>${expense.date}</td>
//             <td>${expense.description}</td>
//             <td><button onclick="removeSummary(${index})">Delete</button></td>
//         `;
//         list.appendChild(row);
//     });

//     // Calculate and display the total amount
//     const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
//     total.textContent = totalAmount.toFixed(2);

//     // Save the updated list in localStorage
//     localStorage.setItem('expenses', JSON.stringify(expenses));
// };

// // Event listener for the 'Add Expense' button
// add.addEventListener('click', addExpenses);

// // Initialize the UI with any existing data
// updateUI();



// *****************************************************************

const category = document.getElementById('expense-category');
const amount = document.getElementById('expense-amount');
const dates = document.getElementById('expense-date');
const description = document.getElementById('expense-description');
const list = document.getElementById('expense-list');
const total = document.getElementById('total-amount');
const add = document.getElementById('add');

let expenses = JSON.parse(localStorage.getItem('expenses')) || []
const addExpenses = () => {
    let newExpanses = {
        category: category.value,
        amount: parseFloat(amount.value),
        date: date.value,
        description: description.value
    }

    expenses.push(newExpanses)
    updateUI()

    category.value = ''
    amount.value = ''
    date.value = ''
    description.value = ''

}

const removeSummary = (id) => {
    expenses.slice(id, 1)
    updateUI()

}

const updateUI = () => {
    list.innerHTML = ''

    expenses.forEach((expanse, index) => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${expanse.category}</td>
        <td>$${expanse.amount.toFixed(2)}</td>
        <td>${expanse.date}</td>
        <td>${expanse.description}</td>
        <td><button onclick="removeSummary(${index})">Delete</button></td
        `


        list.appendChild(row)
    });
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    total.textContent = totalAmount.toFixed(2);

    localStorage.setItem('expenses', JSON.stringify(expenses))



}

add.addEventListener('click', addExpenses)
updateUI()



