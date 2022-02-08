import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  // state used to change item title for clickHandler
  const [title, setTitle ] = useState(props.title);

  // destructure props
  const { date, amount } = props;

  // function for handling clicks
  const clickHandler = () => {
    setTitle('Updated!');
    console.log('Clicked!!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
