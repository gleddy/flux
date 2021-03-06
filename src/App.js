import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import Form from './Form';
import TweetStore from './TweetStore';
import TweetActions from "./TweetActions";

const getAppState = () => {
  return { tweets: TweetStore.getAllTweets() };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = getAppState();
  }
  addTweet = newTweetBody => {
    console.log("1. In the view");
    TweetActions.addTweet(newTweetBody);
  }
  _onChange = () => {
    console.log("6. Got news from the store, reset state")
    this.setState(getAppState());
  }
  componentDidMount() {
    TweetStore.on("change", this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeListener("change", this._onChange);
  }
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
