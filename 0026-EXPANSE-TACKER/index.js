const category = document.getElementById('expense-category');
const amount = document.getElementById('expense-amount');
const dates = document.getElementById('expense-date');
const description = document.getElementById('expense-description');
const list = document.getElementById('expense-list');
const total = document.getElementById('total-amount');
const add = document.getElementById('add');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

const updateUI = () => {
    list.innerHTML = '';
    expenses.forEach((expense, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${expense.category}</td>
        <td>$${expense.amount.toFixed(2)}</td>
        <td>${expense.date}</td>
        <td>${expense.description}</td>
        <td><button onclick="removeSummary(${index})">Delete</button></td>
        `;
        list.appendChild(row);
    });

    let totals = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    total.textContent = totals.toFixed(2);

    localStorage.setItem('expenses', JSON.stringify(expenses));
};

const addExpenses = () => {
    let newExpense = {
        category: category.value,
        amount: parseFloat(amount.value),
        date: dates.value, // Fixed typo here
        description: description.value
    };

    expenses.push(newExpense);
    updateUI();

    // Reset the form inputs
    category.value = '';
    amount.value = '';
    dates.value = ''; // Fixed typo here
    description.value = '';
};

const removeSummary = (id) => {
    expenses.splice(id, 1); // Changed from slice to splice
    updateUI();
};

add.addEventListener('click', addExpenses);

updateUI();
