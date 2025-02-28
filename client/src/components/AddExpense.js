import React, { useState } from 'react';
import axios from 'axios';
import './AddExpense.css';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    category: "",
    amount: "",
    date: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post('http://localhost:4000/api/expenses', expense)
    .then(response =>  {
      setExpense({
        name: "",
        category: "",
        amount: "",
        date: ""
    });
    setSuccessMessage("Expense added successfully!");
    setTimeout(() => {
      setSuccessMessage("");
  }, 3000);
    })
    .catch(err=> console.log(err))

  };
  
  return (
    <>
    {successMessage && (
        <div style={{ color: "green", marginBottom: "10px" }}>
            {successMessage}
        </div>
    )}
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
    </>
  )
}

export default AddExpense
