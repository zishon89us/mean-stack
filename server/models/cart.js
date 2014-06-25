'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
    src: {
        type: String,
        default: 'http://d75822.medialib.glogster.com/media/50/505095ff44b7d4622ba9f7eac7a37907f6fb0cd50e401f1200ec2c5090901054/sweets4-jpg.jpg'
    },
    product_id: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    }
});

var CartSchema = new Schema({
    order_id: {
        type: String
    },
    product_id: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    }
});


ImageSchema.methods = {

};
mongoose.model('Image', ImageSchema);
mongoose.model('Cart', CartSchema);