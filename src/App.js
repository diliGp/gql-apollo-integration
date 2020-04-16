import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './GQLClient';
import Books from './components/Books';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <main>
          <Books />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
