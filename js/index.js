$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  var bannerPos = $("#banner").offset().top;

  if (scrollPos > 2) {
    $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.08)");
    console.log("activated");
  }
  else {
    $("#nav").css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.0)");
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