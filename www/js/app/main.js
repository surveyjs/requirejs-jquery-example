define(["jquery", "Survey", "jquery.alpha", "jquery.beta"], function($) {
  //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
  $(function() {
    $("body")
      .alpha()
      .beta();

    var Survey = require("Survey");

    Survey.StylesManager.applyTheme("default");

    var json = {
      questions: [
        {
          type: "radiogroup",
          name: "car",
          title: "What car are you driving?",
          isRequired: true,
          colCount: 4,
          choices: [
            "None",
            "Ford",
            "Vauxhall",
            "Volkswagen",
            "Nissan",
            "Audi",
            "Mercedes-Benz",
            "BMW",
            "Peugeot",
            "Toyota",
            "Citroen"
          ]
        }
      ]
    };

    window.survey = new Survey.Model(json);

    survey.onComplete.add(function(result) {
      document.querySelector("#surveyResult").textContent =
        "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

    $("#surveyElement").Survey({ model: survey });

    // console.dir(Survey);
  });
});
