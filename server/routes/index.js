'use strict';

module.exports = function(app) {

    // Home route
    var index = require('../controllers/index'),
        images = require('../controllers/image'),
        carts = require('../controllers/cart');

    app.route('/')
        .get(index.render);


    app.route('/images')
        .get(images.getAllImages);

    app.route('/cart')
        .post(carts.add);

    app.route('/cart')
        .get(carts.getAllEntries);

};
