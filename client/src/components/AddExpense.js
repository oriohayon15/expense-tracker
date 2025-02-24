import React, { useState } from 'react';
import './AddExpense.css';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(expense); // Just use for testing delete soon
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
        <input 
        type="text"
        value={expense.name}
        onChange={(e) => setExpense({...expense, name: e.target.value})}
        required
        />
        <label>Category:</label>
        <select
        value={expense.category}
        onChange={(e) => setExpense({...expense, category: e.target.value})}
        >
        <option value="" disabled hidden>Select Category</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Subscriptions">Subscriptions</option>
        <option value="Other">Other</option>
        </select>

        <label>Amount:</label>

        <input 
        type="text"
        value={expense.amount}
        onChange={(e) => setExpense({...expense, amount: e.target.value})}
        required
        />

        <label>Date:</label>

        <input 
        type="text"
        value={expense.date}
        onChange={(e) => setExpense({...expense, date: e.target.value})}
        required
        />

        <button>Add Expense</button>
    </form>
  )
}

export default AddExpense
