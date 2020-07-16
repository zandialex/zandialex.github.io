$("nav").removeClass("blackTransparentGradient")

$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  var contentPos = $("#content").offset().top
  var currentPage = ""

  // Check what the current page is
  // https://stackoverflow.com/questions/3373763/how-to-find-if-div-with-specific-id-exists-in-jquery
  if($("#" + "home").length != 0) { // on the home page
    
  }
  else if ($("#" + "project").length != 0) { // on the project page

  }

  var navHeight = $("nav").height()
  var scrollBuffer = 2

  console.log(scrollPos)

  if (scrollPos < 5) {
    $("nav").removeClass("blackTransparentGradient")
    $("nav").removeClass("darkMaterial")
    $("nav").removeClass("blurredBackground")
    $("nav").removeClass("shadowBlock")
  }

  else if (scrollPos >= 5 && scrollPos <= contentPos - navHeight - scrollBuffer) {
    $("nav").addClass("blackTransparentGradient")
    $("nav").removeClass("darkMaterial")
    $("nav").removeClass("blurredBackground")
    $("nav").removeClass("shadowBlock")
  }

  // Add a background to the nav bar
  else if (scrollPos > contentPos - navHeight - scrollBuffer) {
    $("nav").removeClass("blackTransparentGradient")
    $("nav").addClass("darkMaterial")
    $("nav").addClass("blurredBackground")
    $("nav").addClass("shadowBlock")
  }

  // // Remove the background from the nav bar
  // else {
  //   $("nav").removeClass("blackTransparentGradient")
  //   $("nav").removeClass("darkMaterial")
  //   $("nav").removeClass("blurredBackground")
  // }

  // // nav underline
  // if (scrollPos > 25) {
  //   $(".nav").css("box-shadow", "rgba(0, 0, 0, 0.03) 1px 1px 0px, rgba(0, 0, 0, 0.02) 1px 2px 20px");
  //   console.log("one");
  // }
  // else {
  //   $(".nav").css("box-shadow", "none");
  //   console.log("two");
  // }


  // // page title
  // if (scrollPos > 320) {
  //   $(".nav .title").css("opacity", "1");
  //   console.log("one");
  // }
  // else {
  //   $(".nav .title").css("opacity", "0");
  //   console.log("two");
  // }

  // // email link
  // if (scrollPos > 320) {
  //   $(".nav a.email").css("opacity", "1");
  //   $(".nav a.email").addClass("light-gray");
  //   console.log("one");
  // }
  // else {
  //   $(".nav a.email").css("opacity", "0");
  //   $(".nav a.email").addClass("light-gray");
  //   console.log("two");
  // }

});
