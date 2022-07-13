import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = (props) => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
};

export default AllQuotes;