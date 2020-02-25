$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question6 = $("#question6").val();
    var question7 = $("#question7").val();
    var question8 = $("#question8").val();
    var question9 = $("#question9").val();
    var question10 = $("#question10").val();

    var rubyScore = 0
    var csharpScore = 0
    var javascriptScore = 0
    var pythonScore = 0

    // How the score for each language is tallied. Each question has it's own if/else logic. Different questions are weighted differently (silly questions are weighted the lowest). Values are somewhat arbitrary.
    if (question1 === "pythonAndRuby") {
      pythonScore = pythonScore + 4
      rubyScore = rubyScore + 4
    } else if (question1 === "javascript") {
      javascriptScore = javascriptScore + 4
    }

    if (question2 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question2 === "python") {
      pythonScore = pythonScore + 1
    }

    if (question3 === "ruby") {
      rubyScore = rubyScore + 2
    } else if (question3 === "javascript") {
      javascriptScore = javascriptScore + 2
    } else if (question3 === "csharp") {
      csharpScore = csharpScore + 2 
    } else if (question3 === "python") {
      pythonScore = pythonScore + 2
    }

    if (question4 === "python") {
      pythonScore = pythonScore + 3
    } else if (question4 === "rubyAndJavascript") {
      rubyScore = rubyScore + 2
      javascriptScore = javascriptScore + 2
    } else if (question4 === "csharp") {
      csharpScore = csharpScore + 3
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

    if (question6 === "csharp") {
      csharpScore = csharpScore + 1
    } else if (question6 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question6 === "python") {
      pythonScore = pythonScore + 1
    } else if (question6 === "javascript") {
      javascriptScore = javascriptScore + 1
    }

    if (question7 === "csharp") {
      csharpScore = csharpScore + 1
    } else if (question7 === "ruby") {
      rubyScore = rubyScore + 1
    } else if (question7 === "python") {
      pythonScore = pythonScore + 1
    } else if (question7 === "javascript") {
      javascriptScore = javascriptScore + 1
    }

    if (question8 === "python") {
      pythonScore = pythonScore + 2
    } else if (question8 === "rubyAndJavascript") {
      rubyScore = rubyScore + 2
      javascriptScore = javascriptScore + 2
    } else if (question8 === "csharp") {
      csharpScore = csharpScore + 2
    }

    if (question9 === "csharp") {
      csharpScore = csharpScore + 2
    } else if (question9 === "ruby") {
      rubyScore = rubyScore + 2
    } else if (question9 === "python") {
      pythonScore = pythonScore + 2
    } else if (question9 === "javascript") {
      javascriptScore = javascriptScore + 2
    }
    
    if (question10 === "csharp") {
      csharpScore = csharpScore + 2
    } else if (question10 === "ruby") {
      rubyScore = rubyScore + 2
    } else if (question10 === "python") {
      pythonScore = pythonScore + 2
    } else if (question10 === "javascript") {
      javascriptScore = javascriptScore + 2
    }
    
    // Used to check final score
    console.log(rubyScore, csharpScore, javascriptScore, pythonScore) 

    // The result displayed is whatever language has the highest score. Its logo is then highlighted and the rest of the logos are made opaque.
    if (rubyScore > csharpScore && rubyScore > javascriptScore && rubyScore > pythonScore) {
      $("#preferRuby").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
      $("#preferPythonAndJavascript").hide()
      $(".logos :not(#rubylogo)").addClass("dehighlight")
      $(".logos #rubylogo").addClass("highlight")
      $(".logos :not(#rubylogo)").removeClass("highlight")
    } else if (csharpScore > rubyScore && csharpScore > javascriptScore && csharpScore > pythonScore) {
      $("#preferCsharp").show()
      $("#preferJavascript").hide()
      $("#preferPython").hide()
      $("#preferRuby").hide()
      $("#preferPythonAndJavascript").hide()
      $(".logos :not(#csharplogo)").addClass("dehighlight")
      $(".logos #csharplogo").addClass("highlight")
      $(".logos :not(#csharplogo)").removeClass("highlight")
    } else if (javascriptScore > rubyScore && javascriptScore > csharpScore && javascriptScore > pythonScore) {
      $("#preferJavascript").show()
      $("#preferPython").hide()
      $("#preferRuby").hide()
      $("#preferCsharp").hide()
      $("#preferPythonAndJavascript").hide()
      $(".logos :not(#javascriptlogo)").addClass("dehighlight")
      $(".logos #javascriptlogo").addClass("highlight")
      $(".logos :not(#javascriptlogo)").removeClass("highlight")
    } else if (pythonScore > rubyScore && pythonScore > csharpScore && pythonScore > javascriptScore) {
      $("#preferPython").show()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferRuby").hide()
      $("#preferPythonAndJavascript").hide()
      $(".logos :not(#pythonlogo)").addClass("dehighlight")
      $(".logos #pythonlogo").addClass("highlight")
      $(".logos :not(#pythonlogo)").removeClass("highlight")
    } else if (pythonScore === javascriptScore) {
      $("#preferPythonAndJavascript").show()
      $("#preferPython").hide()
      $("#preferCsharp").hide()
      $("#preferJavascript").hide()
      $("#preferRuby").hide()
      $(".logos :not(#pythonlogo, #javascriptlogo)").addClass("dehighlight")
      $(".logos #javascriptlogo, #pythonlogo").addClass("highlight")
      $(".logos :not(#pythonlogo, #javascriptlogo)").removeClass("highlight")
    }
  })
})