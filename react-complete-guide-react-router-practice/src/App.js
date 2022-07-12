import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetails from './components/pages/QuoteDetails';
import NewQuote from './components/pages/NewQuote';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
