import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Feb 3rd 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">200.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
