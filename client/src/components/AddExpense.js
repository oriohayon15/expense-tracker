import React, { useState } from 'react';
import axios from 'axios';
import {auth} from '../firebase';
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

    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to add an expense!");
      return;
    }

    const newExpense = { ...expense, userId:user.uid };

    axios.post('http://localhost:4000/api/expenses', newExpense)
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
        <div className="alert alert-success mb-3">{successMessage}</div>
      )}
  
      <form onSubmit={handleSubmit} className="container p-4 border rounded shadow bg-light h-100 ">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input 
            type="text"
            className="form-control"
            value={expense.name}
            onChange={(e) => setExpense({...expense, name: e.target.value})}
            required
          />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
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
        </div>
  
        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input 
            type="text"
            className="form-control"
            value={expense.amount}
            onChange={(e) => setExpense({...expense, amount: e.target.value})}
            required
          />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input 
            type="text"
            className="form-control"
            value={expense.date}
            onChange={(e) => setExpense({...expense, date: e.target.value})}
            required
          />
        </div>
  
        <button className="btn btn-primary w-100 fw-bold">Add Expense</button>
      </form>
    </>
  );
}

export default AddExpense
