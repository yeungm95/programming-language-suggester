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


    
    if (rubyScore > csharpScore && rubyScore > javascriptScore && rubyScore > pythonScore) {
      $("#preferRuby").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
    } else if (csharpScore > rubyScore && csharpScore > javascriptScore && csharpScore > pythonScore) {
      $("#preferCsharp").show()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
      $("#preferRuby").hide()
    } else if (javascriptScore > rubyScore && javascriptScore > csharpScore && javascriptScore > pythonScore) {
      $("#preferJavascript").show()
      $("#preferPython").hide()
      $("#preferRuby").hide()
      $("#preferCsharp").hide()
    } else if (pythonScore > rubyScore && pythonScore > csharpScore && pythonScore > javascriptScore) {
      $("#preferPython").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferRuby").hide()
    }
  })
})