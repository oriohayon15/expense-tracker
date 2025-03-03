import React from 'react';

const TotalExpenses = ({expenses}) => {
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div
        className='total-expenses'>
            <h3 className='fw-bold fs-3 '>
                 ${totalAmount.toFixed(2)}
            </h3>
        </div>
    );
};

export default TotalExpenses;