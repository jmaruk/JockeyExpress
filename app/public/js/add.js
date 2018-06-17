// The code in add.js handles what happens when the user clicks the "Add a horse" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newhorse object
  var newhorse = {
    name: $("#name").val().trim(),
    sire: $("#sire").val().trim(),
    mare: $("#mare").val().trim(),
    gender: $("#gender").val().trim(),
    age: $("#age").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newhorse)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#sire").val("");
  $("#mare").val("");
  $("#gender").val("");
  $("#age").val("");

});
