// Business (or back-end) logic:
var frontVsBack = 0;
var company = 0;
var android = 0;
var rubyPhp = 0;
var userLocation = 0;
var id = 0;

var questionLocation = function(){
  $("#location").fadeOut();
  $("#question1").fadeIn();
  if (userLocation === "seattle") {
    // alert("Seattle");
    $("#seattle").show();
  } else if (userLocation === "portland") {
    // alert("Portland");
    $("#portland").show();
  } else {
    // alert("Philadelphia")
    $("#philadelphia").fadeIn();;
  };
};

var question1 = function() {
  $(".def-pop-box").hide();
  $("#def-pop-container").fadeIn();
  $("#question1").fadeOut();
  if (frontVsBack === "frontend") {
    $("#frontend-def").fadeIn();
    // $("#question2").fadeIn();
  } else {
    $("#backend-def").fadeIn();
    // $("#question2").fadeIn();
  };
};

var question2 = function() {
  $("#question2").fadeOut();
  if (company === "large") {
    $("#question3").fadeIn();
  } else {
    $("#question4").fadeIn();
  }
}

var question3 = function() {
  $(".question").fadeOut();
  $("#result-container").fadeIn();
  if (android === "android") {
    $("#java").fadeIn();
  } else {
    $("#c-sharp").fadeIn();
  };
};

var question4 = function() {
  $(".question").fadeOut();
  $("#result-container").fadeIn();
  if (rubyPhp === "ruby") {
    $("#ruby").fadeIn();
  } else {
    $("#php").fadeIn();
  };
};

var confirmClick = function() {
  id = event.target.id;
  $("#def-pop-container").fadeOut();
  $(".def-pop-box").fadeOut();
  if (id == "front-back-yes") {
    $("#question1").fadeOut();
    if ($("#frontend-def").is(":visible")){
      $("#result-container").fadeIn();
      $("#css").fadeIn();
    } else {
      $("#question2").fadeIn();
    };
  } else {
    $("#question1").fadeIn();
    // alert("Front-Back-No");
    // $("#def-pop-container").fadeIn();
    // $("#backend-def").fadeIn();
    // $("#def-pop-container").fadeOut();
    // $("#frontend-def").fadeOut();
  };
};

var getStarted = function(){
  $("#splash-page").fadeOut();
  $("#location").fadeIn();
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
