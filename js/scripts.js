$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question5 = $("#question6").val();
    var question5 = $("#question7").val();
    var question5 = $("#question8").val();

    var rubyScore = 0
    var csharpScore = 0
    var javascriptScore = 0
    var pythonScore = 0

    // How the score for each language is tallied. Each question has it's own if/else logic.
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

    if (question4 === "python") {
      pythonScore = pythonScore + 1
    } else if (question4 === "rubyAndJavascript") {
      rubyScore = rubyScore + 1
      javascriptScore = javascriptScore + 1
    } else if (question4 === "csharp") {
      csharpScore = csharpScore + 1
    }

    if (question5 === "csharp") {
      csharpScore = csharpScore + 1
    } else if (question5 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question5 === "python") {
      pythonScore = pythonScore + 1
    } else if (question5 === "javascript") {
      javascriptScore = javascriptScore + 1
    }
    
    // Used to check final score
    console.log(rubyScore, csharpScore, javascriptScore, pythonScore) 

    // The result is whatever language has the highest score. The resulting logo is then highlighted and the rest of the logos are made opaque.
    if (rubyScore > csharpScore && rubyScore > javascriptScore && rubyScore > pythonScore) {
      $("#preferRuby").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
      $(".logos :not(#rubylogo)").addClass("dehighlight")
      $(".logos #rubylogo").addClass("highlight")
    } else if (csharpScore > rubyScore && csharpScore > javascriptScore && csharpScore > pythonScore) {
      $("#preferCsharp").show()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
      $("#preferRuby").hide()
      $(".logos :not(#csharplogo)").addClass("dehighlight")
      $(".logos #csharplogo").addClass("highlight")
    } else if (javascriptScore > rubyScore && javascriptScore > csharpScore && javascriptScore > pythonScore) {
      $("#preferJavascript").show()
      $("#preferPython").hide()
      $("#preferRuby").hide()
      $("#preferCsharp").hide()
      $(".logos :not(#javascriptlogo)").addClass("dehighlight")
      $(".logos #javascriptlogo").addClass("highlight")
    } else if (pythonScore > rubyScore && pythonScore > csharpScore && pythonScore > javascriptScore) {
      $("#preferPython").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferRuby").hide()
      $(".logos :not(#pythonlogo)").addClass("dehighlight")
      $(".logos #pythonlogo").addClass("highlight")
    }
  })
})