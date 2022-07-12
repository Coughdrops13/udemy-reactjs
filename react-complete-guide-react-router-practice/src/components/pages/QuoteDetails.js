import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';


// import classes from './QuoteItem.module.css';
import Comments from '../comments/Comments';


const QuoteItem = (props) => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
};

export default QuoteItem;
