

// Business logic not included because it will remain the same.




$(document).ready(function() {
  $("form#favorites").submit(function() {
    event.preventDefault();
    var answer1 = ($("input#color1").val());
    var answer2 = ($("#food1").val());
    var answer3 = ($("#animal1").val());

   var results = []
   results.push(answer1)
   results.push(answer2)
   results.push(answer3)




    $("#results").show("#results");
    $("#text1").text(results[0]);
    $("#text2").text(results[1]);
    $("#text3").text(results[2]);
  });
});
