
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

// nav blur
if (isSafari) {
  $("#nav").css("background-color", "rgba(249,246,243,0.75)");
  $("#nav").css("-webkit-backdrop-filter", "blur(30px)");
  $("#nav").css("backdrop-filter", "blur(30px)");
};


$("#openNav").click(function () {
  $(this).css("display", "none");
  $("#navLinksContainer").css("display", "inherit");
});


var originalYelpText = $("#yelp p").text();
$("#yelp").mouseover(function() {
  $("#yelp p").text("Coming Soon");
});
$("#yelp").mouseout(function() {
  $("#yelp p").text(originalYelpText);
});

$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  var bannerPos = $(".banner").offset().top;

  if (!isSafari) {
    if (scrollPos > 2) {
      $("#nav").css("box-shadow", "0px 1px 40px 0px rgba(0,0,0,0.15), 0px 1px 0px 0px rgba(0,0,0,0.03)");
    }
    else {
      $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.0)");
    }
  }

  // safari
  else {
    if (scrollPos > 2) {
      $("#nav").css("box-shadow", "0px 1px 9px 0px rgba(0,0,0,0.05), 0px 1px 0px 0px rgba(0,0,0,0.042)");
    }
    else {
      $("#nav").css("box-shadow", "0px 1px 7px 0px rgba(0,0,0,0.0)");
    }
  }
});
