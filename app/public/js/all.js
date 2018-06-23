
// Make a get request to our api route that will return every horse
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var tBody = $("tbody");
      var tRow = $("<tr>");
      var horseName = $("<td>").text(data[i].name);
      var horseSire = $("<td>").text(data[i].sire);
      var horseMare = $("<td>").text(data[i].mare);
      var horseAge = $("<td>").text(data[i].age);
      var horseGender = $("<td>").text(data[i].gender);
      tRow.prepend(horseName, horseSire,horseMare,horseAge,horseGender);
      tBody.prepend(tRow);
    }
  }
});





