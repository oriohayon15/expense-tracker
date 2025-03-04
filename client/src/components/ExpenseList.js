import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {auth} from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import TotalExpenses from './TotalExpenses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ExpenseChart from './ExpenseCharts';

const ExpenseList = () => {
    const [expense, setExpense] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    const [successMessage, setSuccessMessage] = useState("");
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          axios.get(`${process.env.REACT_APP_API_URL}/api/expenses?userId=${user.uid}`)
            .then(res => {
                console.log(res);
                setExpense(res.data);
            })
            .catch(err => console.log(err));
        }
      });
    
      return () => unsubscribe(); 
    }, [expense]);
    
    const handleDelete = async (_id) => {
      try {
        await axios.delete(`http://localhost:4000/api/expenses/${_id}`);
        setExpense(expense.filter(expense => expense._id !== _id))
        setSuccessMessage("Expense deleted succesfully!");
      setTimeout(() => {
        setSuccessMessage("");
    }, 3000);
      } 
      catch (err) {
        console.log('Error deleting expense:', err);
      }
    };

    const filteredExpenses = expense.filter(item => 
        selectedCategory === "All" || item.category === selectedCategory
      );      
      return (
        <div className="container mt-4">
          <div className="row ">
            {/* Expense List */}
            <div className="col-md-6 container p-4 border rounded shadow bg-light ">
              <h2 className="text-center text-primary">Your Expenses</h2>
      
              {/* Total Expenses Card*/}
              <div className="card shadow-sm p-2 mb-3 text-center">
                <h5 className="text-primary mb-1 text-dark">Total Spent:</h5>
                <TotalExpenses expenses={expense} />
              </div>
      
              {/* Success Message */}
              {successMessage && (
                <div className="alert alert-success text-center">{successMessage}</div>
              )}
      
              {/* Category Filter Dropdown */}
              <select className="form-select mb-3" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Other">Other</option>
              </select>
      
              {/* Expenses List */}
              <div className="overflow-auto fw-semibold shadow-sm " style={{ maxHeight: "400px" }}>
                <ul className="list-group">
                  {filteredExpenses.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center rounded-2">
                      <div>
                        <strong>{item.name}</strong> - {item.category} - ${item.amount} - {item.date}
                      </div>
                      <button onClick={() => handleDelete(item._id)} className="text-danger ">
                        <FontAwesomeIcon icon={faTrash}  className='shadow-sm cursor-pointer'/>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
      
            {/* Expense Chart */}
            <div className="col-md-6 d-flex justify-content-center ">
              <div style={{ width: "450px", height: "450px" }}>
              <ExpenseChart expenses={expense} />
              </div>
            </div>
          </div>
        </div>
      );        
};

export default ExpenseList