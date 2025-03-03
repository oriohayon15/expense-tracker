import React from 'react';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import './App.css';



// Render the component inside App
function App() {
  return (
    <div style={{ background: "linear-gradient(to right, #e3f2fd, #f8f9fa)", minHeight: "100vh" }}>
      <div className="container mt-5">
        <h1 className="text-center text-primary display-4">Expense Tracker</h1>

        <div className='row'>
          <div className='col-md-8 me-4'>
            <ExpenseList />
          </div>
          <div className='col-md-3 ms-5'>
            <AddExpense />
          </div>
        </div>
      </div>
      
      <footer className="bg-dark text-light text-center py-3 fixed-bottom">
        <p className="mb-0">© 2025 Ori Ohayon. Built with React & Bootstrap.</p>
      </footer>
    </div>
  );
}

export default App;
