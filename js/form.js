function initializeForm(element) {
  let clone = {};
  Object.assign(clone, element);

  $("#body-wrapper").empty();

  for (el in clone) {
    elValue = clone[el];

    if (elValue.tag) {
      newElement = document.createElement(elValue.tag);

      if (elValue.label && elValue["tag"] !== "button") {
        newElement.setAttribute("id", elValue["label"]);

        label = document.createElement("label");
        label.setAttribute("for", newElement.getAttribute("id"));
        label.innerHTML = elValue.label;
        $("#body-wrapper").append(label);
      } else {
        newElement.innerHTML = elValue.label
          ? elValue["label"]
          : elValue["value"];
      }
 

      if (elValue.input_type) {
        newElement.setAttribute("type", elValue["input_type"]);
        newElement.setAttribute("value", "");
      }

      $("#body-wrapper").append(newElement);
      $("#body-wrapper").append(document.createElement("br"));

      if (elValue["tag"] == "button") {
        newElement.addEventListener("click", function() {
          this.innerHTML == "Submit" ? submitForm(clone) : initializeHome();
        });
      }
    }
  }
}

function submitForm(clone) {
  for (el in clone) {
    if (clone[el]["tag"] == "input") {
      clone[el].value = document.getElementById(clone[el]["label"]).value;
    } else delete clone[el];
  }

    $.post('/submit', clone);
}
