import React, { Component } from 'react';

class Form extends Component {
  addTweet = () => {
    this.props.addTweet(this.refs.tweetInput.value);
    this.refs.tweetInput.value = "";
  };
  render() {
    return (
      <div className="Form">
        <form>
          <textarea ref="tweetInput"></textarea>
          <button type="button" onClick={this.addTweet}>Tweet</button>
        </form>
      </div>
    );
  }
}

export default Form;
