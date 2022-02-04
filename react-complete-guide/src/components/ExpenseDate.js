function ExpenseDate(props) {

  // extract each piece of date from props
  const month = props.date.toLocaleString("en-US", { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: '2-digit' });

  return (
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  )
}

export default ExpenseDate;