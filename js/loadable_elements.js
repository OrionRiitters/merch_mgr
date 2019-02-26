// homeObject used to load initial merch management screen. See intializeHome() in
// home.js
homeObject = {
    columns: {
        left: {
            title: {
                label: 'Concerts',
                type: 'p',
                parent_id: 'left-column'
            },
            add_concert: {
                header: 'add_concert',
                label: 'Add Concert',
                type: 'button',
                parent_id: 'left-column'
            }

        },
        center: {
            title: {
                label: 'Merchandise',
                type: 'p',
                parent_id: 'center-column'
            },
            add_merchandise: {
                header: 'add_merchandise',
                label: 'Add Merchandise',
                type: 'button',
                parent_id: 'center-column'
            }
        },
        right: {
            title: {
                label: 'Sales',
                type: 'p',
                parent_id: 'center-column'
            },
            add_sale: {
                header: 'add_sale',
                label: 'Add Sale',
                type: 'button',
                parent_id: 'center-column'
            }
        }
    }
}
