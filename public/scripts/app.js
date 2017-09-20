/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  tweetData = {
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
  }

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


    console.log(tweetInProgress);
    return tweetInProgress;
  }
  var $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweets-container').append($tweet);
});



        // <article class="tweet">
        //   <header class="tweet-header">
        //     <img src="https://www.fillmurray.com/50/50">
        //     <h2 class="username">Bill Murray</h2>
        //     <div class="handle">@billmurray</div>
        //   </header>
        //   <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        //   <footer class="tweet-footer">
        //     <p>6 days ago</p>
        //     <div class="tweet-actions">
        //       <a class="tweet-action" href="#"><i class="fa fa-flag" aria-hidden="true"></i></a>
        //       <a class="tweet-action" href="#"><i class="fa fa-retweet" aria-hidden="true"></i></a>
        //       <a class="tweet-action" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        //     </div>
        //   </footer>
        // </article>