'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'counter', 'ImageService', 'CartService', function ($scope, Global, counter, ImageService, CartService) {
        $scope.global = Global;
        $scope.entries = [];
        console.log('here about to cal getImages');

        ImageService.queryImages(function (data, header) {
            $scope.images = data.list;
        });

        CartService.queryEntries(function (data, header) {
            $scope.entries = data.list;
            counter.cart = data.list.length;
        });

        $scope.addToCart = function (image) {
            counter.cart++;
            CartService.addToCart({order_id:'oid',product_id:image.product_id,price:image.price},function (data, header) {  });
        };

        $scope.syncList = function(){
            CartService.queryEntries(function (data, header) {
                $scope.entries = data.list;
                counter.cart = data.list.length;
            });
        };

    }])
    .value('counter', {cart: 0})
    .directive('counterDirective', function (counter) {
        return {
            restrict: 'E',
            link: function (scope) {
                scope.counter = counter;
            }
        };
    });