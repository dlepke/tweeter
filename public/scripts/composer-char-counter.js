$(document).ready(function() {
  let maxLength = 140;
  $("textarea").on("keyup", function() {
    let length = $(this).val().length;
    let remaining = maxLength - length;
    $(this).siblings("span.counter")[0].innerHTML = remaining;
    let counter = $(".counter");
    if (remaining < 0) {
      counter.removeClass("color-normal").addClass("color-warning");
    } else {
      counter.removeClass("color-warning").addClass("color-normal");
    }
  });
});