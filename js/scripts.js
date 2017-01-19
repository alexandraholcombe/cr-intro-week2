// Business (or back-end) logic:
var frontVsBack = 0;
var company = 0;
var android = 0;
var rubyPhp = 0;
var userLocation = 0;
var id = 0;

var questionLocation = function(){
  $("#location").fadeOut();
  $("#question1").delay(400).fadeIn();
  if (userLocation === "seattle") {
    // alert("Seattle");
    $("#seattle").show();
  } else if (userLocation === "portland") {
    // alert("Portland");
    $("#portland").show();
  } else {
    // alert("Philadelphia")
    $("#philadelphia").show();;
  };
};

var question1 = function() {
  $(".def-pop-box").hide();
  $("#def-pop-container").delay(400).fadeIn();
  $("#question1").fadeOut();
  if (frontVsBack === "frontend") {
    $("#frontend-def").delay(400).fadeIn();
    // $("#question2").delay(400).fadeIn();
  } else {
    $("#backend-def").delay(400).fadeIn();
    // $("#question2").delay(400).fadeIn();
  };
};

var question2 = function() {
  $("#question2").fadeOut();
  if (company === "large") {
    $("#question3").delay(400).fadeIn();
  } else {
    $("#question4").delay(400).fadeIn();
  }
}

var question3 = function() {
  $(".question").fadeOut();
  $("#result-container").fadeIn();
  if (android === "android") {
    $("#java").delay(400).fadeIn();
  } else {
    $("#c-sharp").delay(400).fadeIn();
  };
};

var question4 = function() {
  $(".question").fadeOut();
  $("#result-container").delay(400).fadeIn();
  if (rubyPhp === "ruby") {
    $("#ruby").delay(400).fadeIn();
  } else {
    $("#php").delay(400).fadeIn();
  };
};

var confirmClick = function() {
  id = event.target.id;
  $("#def-pop-container").fadeOut();
  $(".def-pop-box").fadeOut();
  if (id == "front-back-yes") {
    $("#question1").fadeOut();
    if ($("#frontend-def").is(":visible")){
      $("#result-container").delay(400).fadeIn();
      $("#css").delay(400).fadeIn();
    } else {
      $("#question2").delay(400).fadeIn();
    };
  } else {
    $("#question1").delay(400).fadeIn();
    // alert("Front-Back-No");
    // $("#def-pop-container").delay(400).fadeIn();
    // $("#backend-def").delay(400).fadeIn();
    // $("#def-pop-container").fadeOut();
    // $("#frontend-def").fadeOut();
  };
};

var getStarted = function(){
  $("#splash-page").fadeOut();
  $("#location").delay(400).fadeIn();
};


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function(){
  $("#location-form").submit(function(event) {
    event.preventDefault();
    userLocation = $("select#user-location").val();
    // console.log(frontVsBack);
    questionLocation();
  });
  $("#front-or-back-form").submit(function(event) {
    event.preventDefault();
    frontVsBack = $("input:radio[name=frontvsback]:checked").val();
    // console.log(frontVsBack);
    question1();
  });
  $("#company-form").submit(function(event) {
    event.preventDefault();
    company = $("input:radio[name=company]:checked").val();
    // console.log(frontVsBack);
    question2();
  });
  $("#android-form").submit(function(event) {
    event.preventDefault();
    android = $("input:radio[name=android]:checked").val();
    // console.log(frontVsBack);
    question3();
  });
  $("#ruby-php-form").submit(function(event) {
    event.preventDefault();
    rubyPhp = $("input:radio[name=ruby-php]:checked").val();
    // console.log(frontVsBack);
    question4();
  });

  $("#front-back-yes, #front-back-no").click(function(event) {
    confirmClick();
  });

  $("#btn-started").click(function() {
    getStarted();
  });
});
