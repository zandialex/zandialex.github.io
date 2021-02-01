$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();

  // nav underline
  if (scrollPos > 300) {
    $(".nav").css("top", "0");
    console.log("one");
  }
  else {
    $(".nav").css("top", "-90px");
    console.log("two");
  }

  // page title
  if (scrollPos > 320) {
    $(".nav .title").css("opacity", "1");
    console.log("one");
  }
  else {
    $(".nav .title").css("opacity", "0");
    console.log("two");
  }

  // email link
  if (scrollPos > 320) {
    $(".nav a.email").css("opacity", "1");
    $(".nav a.email").addClass("light-gray");
    console.log("one");
  }
  else {
    $(".nav a.email").css("opacity", "0");
    $(".nav a.email").addClass("light-gray");
    console.log("two");
  }

});