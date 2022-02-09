import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);
  const [showForm, setShowForm] = useState(false);

  // changes showForm state between true and false and is triggered when
  // 'add new expense' button in ExpenseForm Component clicked or when
  // Cancel clicked after 'Add New Expense' button
  const showFormHandler = () => {
    setShowForm(prev => !prev);
  };
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses ]
    });
  };

  return (
    <div>
      <NewExpense showForm={showForm} onShowForm={showFormHandler} onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
