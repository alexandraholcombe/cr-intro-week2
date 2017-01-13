// Business (or back-end) logic:
var frontVsBack = 0;
var company = 0;
var android = 0;
var rubyPhp = 0;
var userLocation = 0;
var id = 0;

var questionLocation = function(){
  if (userLocation === "seattle") {
    // alert("Seattle");
    $("#location").fadeOut();
    $("#question1").fadeIn();
    $("#seattle").show();
  } else if (userLocation === "portland") {
    // alert("Portland");
    $("#location").fadeOut();
    $("#question1").fadeIn();
    $("#portland").show();
  } else {
    // alert("Philadelphia")
    $("#location").fadeOut();
    $("#question1").fadeIn();
    $("#philadelphia").fadeIn();;
  };
};

var question1 = function() {
  $(".def-pop-box").hide();
  if (frontVsBack === "frontend") {
    $("#def-pop-container").fadeIn();
    $("#frontend-def").fadeIn();
    $("#question1").fadeOut();
    // $("#question2").fadeIn();
  } else {
    $("#def-pop-container").fadeIn();
    $("#backend-def").fadeIn();
    $("#question1").fadeOut();
    // $("#question2").fadeIn();
  };
};

var question2 = function() {
  if (company === "large") {
    $("#question3").fadeIn();
  } else {
    $("#question4").fadeIn();
  }
}

var question3 = function() {
  if (android === "android") {
    $(".question").fadeOut();
    $("#result-container").fadeIn();
    $("#java").fadeIn();
  } else {
    $(".question").fadeOut();
    $("#result-container").fadeIn();
    $("#c-sharp").fadeIn();
  };
};

var question4 = function() {
  if (rubyPhp === "ruby") {
    $(".question").fadeOut();
    $("#result-container").fadeIn();
    $("#ruby").fadeIn();
  } else {
    $(".question").fadeOut();
    $("#result-container").fadeIn();
    $("#php").fadeIn();
  };
};

var buttonClick = function() {
  id = event.target.id;
  if (id == "front-back-yes") {
    $("#def-pop-container").fadeOut();
    $(".def-pop-box").fadeOut();
    $("#question1").fadeOut();
    if ($(".frontend-def").is(":visible")){
      $("#result-container").fadeIn();
      $("#css").fadeIn();
    } else {
      $("#question2").fadeIn();
    };
  } else {
    $("#def-pop-container").fadeOut();
    $(".def-pop-box").fadeOut();
    $("#question1").fadeIn();
    // alert("Front-Back-No");
    // $("#def-pop-container").fadeIn();
    // $("#backend-def").fadeIn();
    // $("#def-pop-container").fadeOut();
    // $("#frontend-def").fadeOut();
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

  $("#front-back-yes, #front-back-no").click(function(event) {
    buttonClick();
  });
});
