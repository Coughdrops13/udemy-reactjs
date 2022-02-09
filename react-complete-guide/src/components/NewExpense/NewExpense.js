import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  if (!props.showForm) {
    return (
      <div className="new-expense">
        <button type="submit" onClick={props.onShowForm}>Add New Expense</button>
      </div>
    )
  }


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString()
    }
    props.onAddExpense(expenseData);
  };


  return (
    <div className="new-expense">
      <ExpenseForm onCancel={props.onShowForm} onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )

}

export default NewExpense;