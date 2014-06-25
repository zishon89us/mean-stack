'use strict';

angular.module('mean.system').factory('ImageService', function ($resource) {
    return $resource('images', {}, {
        queryImages: {method: 'GET', params: {}}
    });
});

angular.module('mean.system').factory('CartService', function ($resource) {
    return $resource('cart', {}, {
        addToCart: {method: 'POST'},
        queryEntries: {method: 'GET', params: {}}
    });
});
