import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TotalExpenses from './TotalExpenses';

const ExpenseList = () => {
    const [expense, setExpense] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    useEffect(() => {
        axios.get('http://localhost:4000/api/expenses')
    .then(res => {
        console.log(res);
        setExpense(res.data);
    })
    .catch(err => {console.log(err)})
    });
    const filteredExpenses = expense.filter(item => 
        selectedCategory === "All" || item.category === selectedCategory
      );      
    return (
        <div>
            <h2>Your Expenses:</h2>
            <select 
            onChange={(e) => {setSelectedCategory(e.target.value)}}
            >
                <option value="All"> All </option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Other">Other</option>
            </select>
            <ul>
            {filteredExpenses.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.category} - ${item.amount} - {item.date}
          </li>
        ))}
      </ul>
      <TotalExpenses expenses={expense} />
    </div>
  );
};

export default ExpenseList