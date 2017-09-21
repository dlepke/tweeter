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

    var formattedTimestamp = moment(tweetObject.created_at).fromNow();
    console.log(formattedTimestamp);

    var footer = $("<footer>").addClass("tweet-footer").appendTo(tweetInProgress);
    $("<p>").text(formattedTimestamp).appendTo(footer);

    var actions = $("<div>").addClass("tweet-actions").appendTo(footer);

    ['flag', 'retweet', 'heart-o'].forEach(function(icon) {
      var link = $("<a>").addClass("tweet-action").attr('href', '#').appendTo(actions);
      $("<i>").addClass("fa fa-" + icon).attr('aria-hidden', true).appendTo(link);
    });

    return tweetInProgress;
  }

  function renderTweets(arrayOfTweets) {
    $('#tweets-container').empty();
    for (var tweet in arrayOfTweets) {
      var $tweet = createTweetElement(arrayOfTweets[tweet])
      $('#tweets-container').prepend($tweet);
    }
  }

  function loadTweets() {
    $.getJSON('/tweets', function(response) {
      renderTweets(response);
    })
  };

  $(".compose").on("click", function() {
    event.preventDefault();
    $(".new-tweet").slideToggle();
    $(".tweet-text").focus();
  })

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
          loadTweets();
          $(".tweet-text").val('');
        }
      })
    }
  });

  loadTweets();

});

