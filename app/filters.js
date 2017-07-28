'use strict';

/* Filters */
var tool3Filters = angular.module('appFilters', []);

tool3Filters.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});

tool3Filters.filter('truncate', function() {
    return function(input, max){
        if(input.length > max){
            input = input.slice(0, max);
            input += '...'
        }
        return input;
    }
});
