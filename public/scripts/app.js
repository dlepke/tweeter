/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  function createTweetElement(tweetObject) {
    var tweetInProgress = $("<article>").addClass("tweet");

    var header = $("<header>").addClass("tweet-header").appendTo(tweetInProgress);
    $("<img>").attr('src', tweetObject.user.avatars.small).appendTo(header);
    $("<h2>").addClass("username").text(tweetObject.user.name).appendTo(header);
    $("<div>").addClass("handle").text(tweetObject.user.handle).appendTo(header);

    var mainText = $("<p>").text(tweetObject.content.text).appendTo(tweetInProgress);

    var footer = $("<footer>").addClass("tweet-footer").appendTo(tweetInProgress);
    $("<p>").text(tweetObject.created_at).appendTo(footer);
    var actions = $("<div>").addClass("tweet-actions").appendTo(footer);
    var actionFlag = $("<a>").addClass("tweet-action").attr('href', '#').appendTo(actions);
    $("<i>").addClass("fa fa-flag").attr('aria-hidden', true).appendTo(actionFlag);
    var actionRetweet = $("<a>").addClass("tweet-action").attr('href', '#').appendTo(actions);
    $("<i>").addClass("fa fa-retweet").attr('aria-hidden', true).appendTo(actionRetweet);
    var actionHeart = $("<a>").addClass("tweet-action").attr('href', '#').appendTo(actions);
    $("<i>").addClass("fa fa-heart-o").attr('aria-hidden', true).appendTo(actionHeart);

    return tweetInProgress;
  }

  function renderTweets(arrayOfTweets) {
    for (var tweet in arrayOfTweets) {
      var $tweet = createTweetElement(arrayOfTweets[tweet])
      $('#tweets-container').append($tweet);
    }
  }

  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

renderTweets(data);

});

