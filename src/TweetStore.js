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
    console.log("4. Action is handled")
  },
  'LIKE_TWEET': () => {},
  'RETWEET': () => {}
}

let store = new Store();

Dispatcher.register(action => {
  console.log("3. About to determine what to do with the action");
  actionsMap[action.actionType](action);
  console.log("5. About to emit news that data has changed");
  store.emit("change");
});

export default store;
