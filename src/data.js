let DB = {
  data: {
    tweets: [
      { id: 1, body: 'Hello React', timestamp: new Date() },
      { id: 2, body: 'Hello Flux', timestamp: new Date() },
      { id: 3, body: 'Hello Redux', timestamp: new Date() }
    ]
  }
};

DB.addTweet = newTweetBody => {
  const newTweet = {
    id: Date.now(),
    body: newTweetBody,
    timestamp: new Date()
  };

  DB.data.tweets.push(newTweet);
  // emit an event
  return newTweet;
};

export default DB
