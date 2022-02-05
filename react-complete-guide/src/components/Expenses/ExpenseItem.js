import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  // destructure props
  const { date, title, amount } = props;

  // function for handling clicks
  const clickHandler = () => {
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
