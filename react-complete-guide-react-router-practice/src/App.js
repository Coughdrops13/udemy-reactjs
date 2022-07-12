import { Route, Switch, Redirect } from 'react-router-dom';

import QuoteList from './components/quotes/QuoteList';
import QuoteItem from './components/quotes/QuoteItem';
import QuoteForm from './components/quotes/QuoteForm';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <QuoteList />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteItem />
        </Route>
        <Route path="/quotes/new">
          <QuoteForm />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
