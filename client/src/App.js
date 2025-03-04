import React from 'react';
import { useState, useEffect } from "react";
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


// Render the component inside App
function App() {
  const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return () => unsubscribe();
}, []);

const handleGoogleLogin = async () => {
  try {await signInWithPopup(auth, provider);
  } catch(err) {
    console.error(err.message);
  }
};

const handleLogout = async () => {
  await signOut(auth);
};

  return (
    <div style={{ background: "linear-gradient(to right, #e3f2fd, #f8f9fa)", minHeight: "100vh" }}>
      <div className="container mt-5">
        <h1 className="text-center text-primary display-4">Expense Tracker</h1>

        {!user && (
          <div className="text-center mb-3">
            <button className="btn btn-danger" onClick={handleGoogleLogin}>
              Sign in with Google to use Expense Tracker
            </button>
          </div>
        )}

        {user && (
          <div className="text-center mb-3">
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

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
