// Business (or back-end) logic:
var frontVsBack = 0;


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function(){

  $("#front-or-back-form").submit(function(event) {
    event.preventDefault();

    $(".def-pop-box").hide();

    frontVsBack = $("input:radio[name=frontvsback]:checked").val();

    console.log(frontVsBack);

    if (frontVsBack === "frontend") {
      $("#def-pop-container").fadeIn();
      $("#frontend-def").fadeIn();
    } else {
      $("#def-pop-container").fadeIn();
      $("#backend-def").fadeIn();
    };

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
