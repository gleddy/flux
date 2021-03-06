import React, { Component } from 'react';

import Tweet from './Tweet';

class TweetList extends Component {
  render() {
    return (
      <div className="TweetList">
        {this.props.tweets.map(tweet => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
      </div>
    );
  }
}

export default TweetList;
