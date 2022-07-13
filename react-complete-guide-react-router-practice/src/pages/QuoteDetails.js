import { useParams, Route, Redirect, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

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
    id: "q3",
    author: "Bat Man",
    text: "*grunts",
  },
];

const QuoteDetails = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  console.log('match', match)

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <Redirect to="/page-not-found" />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn">
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
