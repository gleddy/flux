// import Dispatcher from "./Dispatcher";

const ActionCreators = {
  addTweet(body) {
    return {
      type: "ADD_TWEET",
      newTweetBody: body
    };
  },
  deleteTweet(tweetId) {
    return {
      type: "DELETE_TWEET",
      tweetId
    };
  },
  likeTweet(id) {
    Dispatcher.dispatch({
      actionType: "LIKE_TWEET",
      tweetIdToBeLiked: id
    });
  },
  retweet(id) {
    Dispatcher.dispatch({
      actionType: "RETWEET",
      id
    });
  },
};

export default ActionCreators;
