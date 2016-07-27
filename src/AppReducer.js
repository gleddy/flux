let initialState = {
  tweets: [
    { id: 1, body: 'Hello React', timestamp: new Date() },
    { id: 2, body: 'Hello Flux++', timestamp: new Date() },
    { id: 3, body: 'Hello Redux', timestamp: new Date() }
  ]
};

const actionsMap = {
  'ADD_TWEET': (prevState, action) => {
    const newTweet = {
      id: Date.now(),
      body: action.newTweetBody,
      timestamp: new Date()
    };
    return {
      tweets: [
        ...prevState.tweets,
        newTweet
      ]
    }
  },
  'DELETE_TWEET': (prevState, { tweetId }) => {
    return {
      tweets: prevState.tweets.filter(tweet => {
        return tweet.id !== tweetId;
      })
    };
  },
  'LIKE_TWEET': () => {},
  'RETWEET': () => {}
}

const reducer = (prevState = initialState, action) => {
  console.log("REDUX1: ", prevState, action);
  const actionFunction = actionsMap[action.type];
  if (actionFunction) {
    return actionFunction(prevState, action)
  };
  return prevState;
};

export default reducer;
