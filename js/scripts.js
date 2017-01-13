// Business (or back-end) logic:
var frontVsBack = 0;


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function(){

  $("#front-or-back-form").submit(function(event) {
    event.preventDefault();

    frontVsBack = $("input:radio[name=frontvsback]:checked").val();

    console.log(frontVsBack);

    if (frontVsBack === "frontend") {
      $("#front-end-def").show();
    } else {
      $("#back-end-def").show();
    };


  });
});
