function initializeHome() {
    //TODO modularize redundant code below:

    let leftColumn = document.createElement('div');
    let centerColumn = document.createElement('div');
    let rightColumn = document.createElement('div');

    leftColumn.id = 'left-column col-md-4';
    centerColumn.id = 'center-column col-md-4';
    rightColumn.id = 'right-column col-md-4';

    document.getElementById('body-wrapper').appendChild(leftColumn);
    document.getElementById('body-wrapper').appendChild(centerColumn);
    document.getElementById('body-wrapper').appendChild(rightColumn);

    for (el in homeObject.columns.left) {

        elValue = homeObject.columns.left[el];
        let newElement = document.createElement(elValue['type']);

        newElement.innerHTML = elValue['label'];
        document.getElementById(elValue['parent_id']).appendChild(newElement);
    }

    for (el in homeObject.columns.center) {

        elValue = homeObject.columns.center[el];
        let newElement = document.createElement(elValue['type']);

        newElement.innerHTML = elValue['label'];
        document.getElementById(elValue['parent_id']).appendChild(newElement);
    }

    for (el in homeObject.columns.right) {

        elValue = homeObject.columns.right[el];
        let newElement = document.createElement(elValue['type']);

        newElement.innerHTML = elValue['label'];
        document.getElementById(elValue['parent_id']).appendChild(newElement);
    }


}
initializeHome();
