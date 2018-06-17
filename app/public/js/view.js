// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();
  // Save the horse they typed into the horse-search input
  var horseSearched = $("#horse-search").val().trim();
  // Make an AJAX get request to our api, including the user's horse in the url
  $.get("/api/horse/" + horseSearched, function(data) {
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#horse-search").val("")
});

// When user hits the author-search-btn
$("#sire-search-btn").on("click", function() {
  // Save the author they typed into the author-search input
  var authorSearched = $("#sire-search").val().trim();
  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/sire/" + authorSearched, function(data) {
    // Log the data to the console
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#sire-search").val("")
});

// When user hits the gender-search-btn
$("#gender-search-btn").on("click", function() {
  // Save the horse they typed into the genre-search input
  var genreSearched = $("#gender-search").val().trim();
  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/gender/" + genreSearched, function(data) {
    console.log(data);
    // Call our renderhorses function to add our horses to the page
    renderhorses(data);
  });
  $("#gender-search").val("")
});
//Function render AJAX response. ---Query results
function renderhorses(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();
    for (var i = 0; i < data.length; i++) {
      var div = $("<div>");
      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>Author: " + data[i].sire + "</p>");
      div.append("<p>Genre: " + data[i].mare + "</p>");
      div.append("<p>Pages: " + data[i].age + "</p>");
      div.append("<p>Pages: " + data[i].gender + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE horse</button>");
      $("#stats").append(div);
    }
    $(".delete").click(function() {
      var info = {
        id: $(this).attr("data-id")
      };
      $.post("/api/delete", info)
        // On success, run the following code
        .then(function(delData) {
          // Log the data we found
          console.log(delData);
          console.log("Deleted Successfully!");
        });
      $(this).closest("div").remove();
    });
  }
};
