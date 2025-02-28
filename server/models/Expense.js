const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: String,
    category: String,
    amount: Number,
    date: String
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;