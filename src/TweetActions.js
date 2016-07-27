export const addTweet = (body) => {
  return {
    type: "ADD_TWEET",
    newTweetBody: body
  };
};

export const deleteTweet = (tweetId) => {
  return {
    type: "DELETE_TWEET",
    tweetId
  };
};
