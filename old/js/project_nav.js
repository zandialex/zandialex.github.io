$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();

  // nav underline
  if (scrollPos > 25) {
    $(".nav").css("box-shadow", "rgba(0, 0, 0, 0.03) 1px 1px 0px, rgba(0, 0, 0, 0.02) 1px 2px 20px");
    console.log("one");
  }
  else {
    $(".nav").css("box-shadow", "none");
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
