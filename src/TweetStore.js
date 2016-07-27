import { EventEmitter } from "events";
import Dispatcher from "./Dispatcher";

let _data = {
  tweets: [
    { id: 1, body: 'Hello React', timestamp: new Date() },
    { id: 2, body: 'Hello Flux++', timestamp: new Date() },
    { id: 3, body: 'Hello Redux', timestamp: new Date() }
  ]
};

class Store extends EventEmitter {
  getAllTweets() {
    return _data.tweets;
  }
}

const actionsMap = {
  'ADD_TWEET': action => {
    const newTweet = {
      id: Date.now(),
      body: action.newTweetBody,
      timestamp: new Date()
    };
    _data.tweets.push(newTweet);
  },
  'LIKE_TWEET': () => {},
  'RETWEET': () => {}
}

let store = new Store();

Dispatcher.register(action => {
  console.log(action);
  actionsMap[action.actionType](action);
  store.emit("change");
});

export default store;
