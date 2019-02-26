function initializeForm(element) {

    $('#body-wrapper').empty();

    for (attr in element) {
        if (element[attr].tag) {
            newElement = document.createElement(element[attr].tag);
            document.createElement('br');
            $('#body-wrapper').append(newElement);
            
        }
    }

}
