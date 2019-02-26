function initializeForm(element) {

    $('#body-wrapper').empty();

    for (attr in element) {
        if (element[attr].tag) {
            if (element[attr].label) {
                label = document.createElement('label');
                label.setAttribute('for', newElement);
                label.innerHTML = element[attr].label;
                $('#body-wrapper').append(label);
            }
            newElement = document.createElement(element[attr].tag);
            document.createElement('br');
            $('#body-wrapper').append(newElement);
            $('#body-wrapper').append(document.createElement('br'));

        }
    }

}
