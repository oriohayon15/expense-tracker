import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';

  ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
    const [chartData, setChartData] = useState(null);
    
    useEffect(()=> {
        const fetchExpenses = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/expenses');
                const expense = res.data;

                const categories = ['Food', 'Bills', 'Entertainment', 'Subscriptions', 'Other']
                const totalPerCategory = categories.map(cat => {
                    return expense
                    .filter(exp => exp.category === cat)
                    .reduce((acc, curr) => acc + curr.amount, 0);
                });

                setChartData({
                    labels: categories,
                    datasets:[
                    {
                        label: 'Expense by Category',
                        data: totalPerCategory,
                        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
                    }]
                });
            }catch (err) {
                console.log('Error fetching expenses');
            }
        };
        fetchExpenses();
    }, [expenses])
    return (
        <div className="text-center text-primary fw-semibold">
            <h2>Pie Chart</h2>
            {chartData && chartData.datasets && 
            <Pie data={chartData} />}
        </div>
    );
};
    export default ExpenseChart;