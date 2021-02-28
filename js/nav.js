$("nav").removeClass("blackTransparentGradient")

$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  var contentPos = $("#content").offset().top
  var currentPage = ""
  var navHeight = $("nav").height()
  var scrollBuffer = 2

  // Check what the current page is
  // https://stackoverflow.com/questions/3373763/how-to-find-if-div-with-specific-id-exists-in-jquery
  if($("#" + "home").length != 0) { // on the home page
    
    if (scrollPos > contentPos) {
      $("nav").css("top", "0");

      $("nav").removeClass("blackTransparentGradient")
      $("nav").addClass("darkMaterial")
      $("nav").addClass("blurredBackground")
      $("nav").addClass("shadowBlock")
    } else {
      $("nav").css("top", "-54px");
    }

  }
  else if ($("#" + "project").length != 0) { // on the project page

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
  }


});
