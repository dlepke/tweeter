/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  $(".submit").on("click", function() {
    event.preventDefault();
    var tweet = $(".tweet-text").val();
    if (tweet.length > 140) {
      $("p.color-warning").removeClass("hide").text("Exceeded max character count.");
    } else if (tweet === '') {
      $("p.color-warning").removeClass("hide").text("Please enter some text.");
    } else {
      $("p.color-warning").addClass("hide");
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: {
          text: tweet
        },
        success: function() {
          console.log("successful post!");
          // loadTweets();
          $(".tweet-text").val('');
        }
      })
    }
  });

  function loadTweets() {
    $.getJSON('/tweets', function(response) {
      renderTweets(response);
    })
  };

  loadTweets();

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


// renderTweets(data);

});

