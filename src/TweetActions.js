import Dispatcher from "./Dispatcher";

const ActionCreators = {
  addTweet(body) {
    console.log("2. About to dispatch")
    Dispatcher.dispatch({
      actionType: "ADD_TWEET",
      newTweetBody: body
    });
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
