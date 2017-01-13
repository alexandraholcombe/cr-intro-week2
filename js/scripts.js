// Business (or back-end) logic:
var frontVsBack = 0;
var company = 0;
var android = 0;
var rubyPhp = 0;
var userLocation = 0;

var questionLocation = function(){
  if (userLocation === "seattle") {
    alert("Seattle");
    $("#location").fadeOut();
    $("#question1").fadeIn();
  } else if (userLocation === "portland") {
    alert("Portland");
    $("#location").fadeOut();
    $("#question1").fadeIn();
  } else {
    alert("Philadelphia")
    $("#location").fadeOut();
    $("#question1").fadeIn();;
  };
};

var question1 = function(){
  $(".def-pop-box").hide();
  if (frontVsBack === "frontend") {
    $("#def-pop-container").fadeIn();
    $("#frontend-def").fadeIn();
    // $("#question1").fadeOut();
    // $("#question2").fadeIn();
  } else {
    $("#def-pop-container").fadeIn();
    $("#backend-def").fadeIn();
    // $("#question1").fadeOut();
    $("#question2").fadeIn();
  };
};

var question2 = function(){
  if (company === "large") {
    $("#question3").fadeIn();
  } else {
    $("#question4").fadeIn();
  }
}

var question3 = function(){
  if (android === "android") {
    $(".question").fadeOut();
    $("#java").fadeIn();
  } else {
    $(".question").fadeOut();
    $("#c-sharp").fadeIn();
  };
};

var question4 = function(){
  if (rubyPhp === "ruby") {
    $(".question").fadeOut();
    $("#ruby").fadeIn();
  } else {
    $(".question").fadeOut();
    $("#php").fadeIn();
  };
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
    rubyPhp = $("input:radio[name=android]:checked").val();
    // console.log(frontVsBack);
    question4();
  });

  // $("button#front-back-yes").onClick(function(){
  //   $("#question1").hide();
  //
  // });
  //
  // $("button#front-back-no").onClick(function(){
  //   $("#front-end-def").hide();
  //   $("#back-end-def").hide();
  // });
});
