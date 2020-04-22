import React, { Component } from 'react';
import { store } from './store';
import { postActions } from './store/posts/actionCreator';
import { Switch, Route } from 'react-router-dom';
import Router from './router';
import { bookActions } from './store/books/actionCreator';

class App extends Component {

  componentDidMount() {
    store.dispatch(postActions.posts.request())
    store.dispatch(bookActions.books.request())
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={props => <Router {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
