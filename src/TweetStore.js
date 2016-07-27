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

let store = new Store();

export default store;
