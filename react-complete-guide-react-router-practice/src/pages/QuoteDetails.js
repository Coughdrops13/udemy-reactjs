import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Bat Man",
    text: `WHERE'S RACHEL?`,
  },
  {
    id: "q2",
    author: "Bat Man",
    text: "Alfred.",
  },
  {
    id: 'q3',
    author: "Bat Man",
    text: "*grunts",
  }
];


const QuoteDetails = (props) => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return (
      <p>No quote found</p>
    )
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
};

export default QuoteDetails;
