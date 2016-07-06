
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

// nav blur
if (isSafari) {
  $("#nav").css("background-color", "rgba(249,246,243,0.75)");
  $("#nav").css("-webkit-backdrop-filter", "blur(20px)");
  $("#nav").css("backdrop-filter", "blur(20px)");
};





$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  var bannerPos = $("#banner").offset().top;

  if (!isSafari) {
    if (scrollPos > 2) {
      $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.08)");
    }
    else {
      $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.0)");
    }
  }

  // safari
  else {
    if (scrollPos > 2) {
      $("#nav").css("box-shadow", "0px 1px 0px 0px rgba(0,0,0,0.07)");
    }
    else {
      $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.0)");
    }
  }
});

var originalKikText = $("#kik p").text();
$("#kik").mouseover(function() {
  $("#kik p").text("Coming Soon");
});
$("#kik").mouseout(function() {
  $("#kik p").text(originalKikText);
});

var originalYelpText = $("#yelp p").text();
$("#yelp").mouseover(function() {
  $("#yelp p").text("Coming Soon");
});
$("#yelp").mouseout(function() {
  $("#yelp p").text(originalYelpText);
});