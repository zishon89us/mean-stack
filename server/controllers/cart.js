'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Cart = mongoose.model('Cart');

exports.add = function(req,res, next) {

    var entry = new Cart(req.body);

    entry.save(function(err) {
        if (err) {
            return 400;
        }
        return 200;
    });
};


exports.getAllEntries = function(req, res, next) {
    Cart.find({})
        .exec(function(err, entries) {
            if (err) return next(err);
            if (!entries) return next(new Error('Failed to get Entries '));
            console.log('requesting images list ' + entries.length);
            res.send({list:entries});
        });
};
