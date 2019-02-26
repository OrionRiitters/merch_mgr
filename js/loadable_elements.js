// homeObject used to load initial merch management screen. See intializeHome() in
// home.js



let homeObject = {
    columns: {
        left: {
            title: {
                label: 'Concerts',
                tag: 'p',
                parent_id: 'left-column'
            },
            add_concert: {
                header: 'add_concert',
                label: 'Add Concert',
                tag: 'button',
                parent_id: 'left-column'
            }

        },
        center: {
            title: {
                label: 'Merchandise',
                tag: 'p',
                parent_id: 'center-column'
            },
            add_merchandise: {
                header: 'add_merchandise',
                label: 'Add Merchandise',
                tag: 'button',
                parent_id: 'center-column'
            }
        },
        right: {
            title: {
                label: 'Sales',
                tag: 'p',
                parent_id: 'right-column'
            },
            add_sale: {
                header: 'add_sale',
                label: 'Add Sale',
                tag: 'button',
                parent_id: 'right-column'
            }
        }
    }
};


let add_concert = {

    header: 'add_concert',
    title: {
        value: 'Add Concert',
        tag: 'p'
    },
    venue: {
        value: '',
        tag: 'input',
        label: 'Venue',
        input_type: 'text'

    },
    city: {
        value: '',
        tag: 'input',
        label: 'City',
        input_type: 'text'
    },
    state: {
        value: '',
        tag: 'input',
        label: 'State',
        input_type: 'text'
    },
    date: {
        value: '',
        tag: 'input',
        label: 'Date',
        input_type: 'date'
    }
};

let add_merchandise = {

    header: 'add_merchandise',
    title: {
        value: 'Add Merchandise',
        tag: 'p'
    },
    item: {
        value: '',
        tag: 'input',
        label: 'Item',
        input_type: 'text'
    },
    price: {
        value: 'text',
        tag: 'input',
        label: 'Price',
        input_type: 'text'
    },
    tax: {
        value: '',
        tag: 'input',
        label: 'Tax',
        input_type: 'text'
    },
    stock: {
        value: '',
        tag: 'input',
        label: 'Stock',
        input_type: 'text'
    }
};

let add_sale = {
    header: 'add_sale'
};

let elements = {
    homeObject: homeObject,
    add_concert: add_concert,
    add_merchandise: add_merchandise,
    add_sale: add_sale
};
