import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';


import classes from './QuoteItem.module.css';
import CommentsList from '../comments/CommentsList';
import NewCommentForm from '../comments/NewCommentForm';

const QuoteItem = (props) => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Route path='/quotes/:quoteId/comments'>
        <CommentsList />
        <NewCommentForm />
      </Route>
    </Fragment>
  )
};

export default QuoteItem;
