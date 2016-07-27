import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import Form from './Form';

import { addTweet, deleteTweet } from "./TweetActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.store.getState();
  }
  addTweet = newTweetBody => {
    this.props.store.dispatch(addTweet(newTweetBody));
  }
  deleteTweet = tweetId => {
    this.props.store.dispatch(deleteTweet(tweetId));
  }
  _onChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._onChange);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="App">
        <Form addTweet={this.addTweet} />
        <TweetList tweets={this.state.tweets}
                   deleteTweet={this.deleteTweet}
                   />
      </div>
    );
  }
}

export default App;
