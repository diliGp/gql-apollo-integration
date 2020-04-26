import React, { Suspense, lazy } from 'react';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './GQL/client';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = lazy(() => import('./components/Home'));
const Books = lazy(() => import('./components/Books'));
const AddBook = lazy(() => import('./components/AddBook'));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path='/books' render={props => <Books {...props} />} />
              <Route path='/add-new-book' render={props => <AddBook {...props} />} />
              <Route path='/' render={props => <Home {...props} />} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
