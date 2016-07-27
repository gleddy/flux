import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import Form from './Form';
import DB from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: DB.data.tweets };
  }
  addTweet = newTweetBody => {
    const newTweet = DB.addTweet(newTweetBody);
    this.setState({
      tweets: this.state.tweets.concat(newTweet)
    })
  };
  render() {
    return (
      <div className="App">
        <Form addTweet={this.addTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
