import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './GQL/client';
import Books from './components/Books';
import AddBook from './components/AddBook';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <main>
          <Books />
          <AddBook />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
