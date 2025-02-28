import React from 'react';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

// Render the component inside App
function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseList />
      <AddExpense />
    </div>
  );
}

export default App;
