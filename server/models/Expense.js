const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    Name: String,
    Category: String,
    Amount: Number,
    Date: {type: Date, default:Date.now}
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;