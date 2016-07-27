let data = {
  tweets: [
    { id: 1, body: 'Hello React', timestamp: Date.now() },
    { id: 2, body: 'Hello Flux', timestamp: Date.now() },
    { id: 3, body: 'Hello Redux', timestamp: Date.now() }
  ]
};

export const addTweet = newTweetBody => {
  const newTweet = { id: Date.now(), body: newTweetBody, timestamp: Date.now() };

  data.tweets.push(newTweet);
};

export default data;
