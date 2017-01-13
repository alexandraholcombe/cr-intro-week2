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
      $("#frontend-def").show();
    } else {
      $("#backend-def").show();
    };


  });
});
