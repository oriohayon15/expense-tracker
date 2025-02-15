const router = require('express').Router();
const { query } = require('express');
const Expense = require('../models/Expense');

router.post('/', async (req, res) => {
    try {
    const newExpense = new Expense({
        Name: req.body.Name,
        Category: req.body.Category,
        Amount: req.body.Amount
    });
    await newExpense.save();
    res.status(200).json({message: 'Expense data saved succesfully!'});
}   catch(err) {
    console.error('Error saving expense data: ', err);
    res.status(500).json({error: 'Error saving expense data' });
    }
});

router.get('/', async(req, res) => {
    let expenses = await Expense.find();
    res.status(200).send(expenses);
});

router.delete('/:id', async(req, res) => {
    const userId = req.params.id;
    try {
        await Expense.deleteOne({_id: userId});
        res.status(200).json({message: "Succesfully deleted expense"})
    } catch (err) {
        res.status(500).json({err: "Failed to delete expense"})
    }
});


module.exports = router;