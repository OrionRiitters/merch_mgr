function initializeHome() {
  $("#body-wrapper").empty();

  let leftColumn = document.createElement("div");
  let centerColumn = document.createElement("div");
  let rightColumn = document.createElement("div");

  leftColumn.id = "left-column";
  centerColumn.id = "center-column";
  rightColumn.id = "right-column";
  leftColumn.className = "col-md-4";
  centerColumn.className = "col-md-4";
  rightColumn.className = "col-md-4";

  $("#body-wrapper").append(leftColumn);
  $("#body-wrapper").append(centerColumn);
  $("#body-wrapper").append(rightColumn);

  for (el1 in homeObject.columns) {
    for (el2 in homeObject.columns[el1]) {
      elValue = homeObject.columns[el1][el2];

      let newElement = document.createElement(elValue["tag"]);

      newElement.innerHTML = elValue["label"];
      newElement.setAttribute("header", el2);
      document.getElementById(elValue["parent_id"]).appendChild(newElement);
    }
  }

  $("button").on("click", function() {
    initializeForm(elements[this.getAttribute("header")]);
  });
}

initializeHome();
