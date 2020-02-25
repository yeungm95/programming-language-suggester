// var pythonScore = 0
// var rubyScore = 0
// var javascriptScore = 0
// var csharpScore = 0


$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    var rubyScore = 0
    var csharpScore = 0
    var javascriptScore = 0
    var pythonScore = 0


    if (question1 === "pythonAndRuby") {
      pythonScore = pythonScore + 1
      rubyScore = rubyScore + 1 
    } else if (question1 === "javascript") {
      javascriptScore = javascriptScore + 1
    }

    if (question2 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question2 === "python") {
      pythonScore = pythonScore + 1
    }

    if (question3 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question3 === "javascript") {
      javascriptScore = javascriptScore + 1
    } else if (question3 === "csharp") {
      csharpScore = csharpScore + 1 
    } else if (question3 === "python") {
      pythonScore = pythonScore + 1
    }
    

  })
})