const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
require('dotenv').config({ path: '../.env' });

const expenseRoutes = require('./routes/expenses');

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('Database Connected')
  }).catch(err=>{
    console.log('Database Not Connected' +err)
  });


  app.use("/api/expenses", expenseRoutes);


app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });