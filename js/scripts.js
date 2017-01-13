// Business (or back-end) logic:
var frontVsBack = 0;
var enterprise = 0;
var android = 0;

var question1 = function(){
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
  if (enterprise === "yes") {
    $("#question3").fadeIn();
  } else {

  }
}

var question3 = function(){
  if (android === "yes") {
    $(".question").fadeOut();
    $("#java").fadeIn();
  } else {

  };
};


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function(){
  $("#front-or-back-form").submit(function(event) {
    event.preventDefault();
    $(".def-pop-box").hide();
    frontVsBack = $("input:radio[name=frontvsback]:checked").val();
    // console.log(frontVsBack);
    question1();
  });
  $("#enterprise-form").submit(function(event) {
    event.preventDefault();
    enterprise = $("input:radio[name=enterprise]:checked").val();
    // console.log(frontVsBack);
    question2();
  });
  $("#android-form").submit(function(event) {
    event.preventDefault();
    android = $("input:radio[name=android]:checked").val();
    // console.log(frontVsBack);
    question3();
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
