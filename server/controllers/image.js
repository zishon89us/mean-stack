'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Image = mongoose.model('Image');

var add = function(img) {

    var image = new Image(img);

    image.save(function(err) {
        if (err) {
            return 400;
        }
        return 200;
    });
};

var seed = function(list) {

    list.forEach(function(item){
       add(item);
    });
};

exports.getAllImages = function(req, res, next) {
    Image.find({})
        .exec(function(err, images) {
            console.log('requesting images');
            if (err) return next(err);
            if (!images) return next(new Error('Failed to get Images '));
            console.log('requesting images list ' + images.length);
            res.send({list:images});
        });
};

(function(){

    Image.find({})
        .exec(function(err, images) {
            if (err) return 'Yukh!';
            if (!images.length){
                var list = [],
                    entryCount = 6;

                for(var i = 0; i<entryCount;i++)
                    list.push({
                        src: 'http://d75822.medialib.glogster.com/media/50/505095ff44b7d4622ba9f7eac7a37907f6fb0cd50e401f1200ec2c5090901054/sweets4-jpg.jpg',
                        product_id:'item_' + i,
                        price: 15 * i + i + 25
                    });

                seed(list);
            }
        });

})();