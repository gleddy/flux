import React, { Component } from 'react';

class Tweet extends Component {
  handleClick = () => {
    this.props.deleteTweet(this.props.id);
  };
  render() {
    const { body, timestamp } = this.props;
    return (
      <div className="Tweet" onClick={this.handleClick}>
        <div>{body}</div>
        <div>{timestamp.toString()}</div>
      </div>
    );
  }
}

export default Tweet;
