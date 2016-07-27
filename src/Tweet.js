import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    const { body, timestamp } = this.props;
    return (
      <div className="Tweet">
        <div>{body}</div>
        <div>{timestamp.toString()}</div>
      </div>
    );
  }
}

export default Tweet;
