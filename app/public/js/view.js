// When user hits the search-btn
$("#search-btn").on("click", function (event) {
  event.preventDefault();
  // Save the horse they typed into the horse-search input
  var horseSearched = $("#horse-search").val().trim();
  // Make an AJAX get request to our api, including the user's horse in the url
  $.get("/api/horse/" + horseSearched, function (data) {
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#horse-search").val("")
});

// When user hits the author-search-btn
$("#sire-search-btn").on("click", function () {
  // Save the author they typed into the author-search input
  var authorSearched = $("#sire-search").val().trim();
  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/sire/" + authorSearched, function (data) {
    // Log the data to the console
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#sire-search").val("")
});

// When user hits the gender-search-btn
$("#gender-search-btn").on("click", function () {
  // Save the horse they typed into the genre-search input
  var genreSearched = $("#gender-search").val().trim();
  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/gender/" + genreSearched, function (data) {
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#gender-search").val("")
});
//Function render AJAX response. ---Query results
function renderhorses(data) {
  if (data.length !== 0) {
    $("#tbody").empty('');
    $("#stats").show();
    console.log("====================");
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var tBody = $("tbody");
      var tRow = $("<tr>");
      var horseName = $("<td>").text(data[i].name);
      var horseSire = $("<td>").text(data[i].sire);
      var horseMare = $("<td>").text(data[i].mare);
      var horseAge = $("<td>").text(data[i].age);
      var horseGender = $("<td>").text(data[i].gender);
      var button = $("<td>").html("<button class='delete' data-id='" + data[i].id + "'>DELETE horse</button>");
      tRow.append(horseName, horseSire, horseMare, horseAge, horseGender, button);
      tBody.append(tRow);
    }
    $(".delete").click(function () {
      var info = {
        id: $(this).attr("data-id")
      };
      $.post("/api/delete", info)
        // On success, run the following code
        .then(function (delData) {
          // Log the data we found
          console.log(delData);
          console.log("Deleted Successfully!");
        });
      $(this).closest("div").remove();
    });
  }
};
