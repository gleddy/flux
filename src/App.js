import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.store.getState();
  }
  addTweet = newTweetBody => {
    // TweetActions.addTweet(newTweetBody);
  }
  deleteTweet = tweetId => {
    // TweetActions.deleteTweet(tweetId);
  }
  // _onChange = () => {
  //   this.setState(getAppState());
  // }
  // componentDidMount() {
  //   TweetStore.on("change", this._onChange);
  // }
  // componentWillUnmount() {
  //   TweetStore.removeListener("change", this._onChange);
  // }
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
