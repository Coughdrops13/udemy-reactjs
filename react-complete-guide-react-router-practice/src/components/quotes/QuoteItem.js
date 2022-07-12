import { useParams } from 'react-router-dom';


import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  const params = useParams();

  return (
    <h1>{params.quoteId}</h1>
  )
};

export default QuoteItem;
