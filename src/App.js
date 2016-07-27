import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetList tweets={data.tweets} />
      </div>
    );
  }
}

export default App;
