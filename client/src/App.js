import React from 'react';
import AddExpense from './components/AddExpense';

// Render the component inside App
function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpense />
    </div>
  );
}

export default App;
