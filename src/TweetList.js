import React, { Component } from 'react';

class TweetList extends Component {
  render() {
    return (
      <div className="TweetList">
        {this.props.tweets[0].body}
      </div>
    );
  }
}

export default TweetList;
