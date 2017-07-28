'use strict';

/* App Module */
var tool3App = angular.module('tool3App', [
  'ngRoute',
  'appControllers',
  'appServices',
  'appFilters',
  'appDirectives',
  'ui.bootstrap'
]);

var view_path = 'app/views/';

tool3App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/3tool', {title: 'wheel deflections', templateUrl: 'wheel-deflection.html'})        
        .when('/404', {templateUrl: '404.html', controller: 'ExceptionHandlerCtrl'})
        .otherwise({
            redirectTo: '/3tool'
        });
    // use the HTML5 History API
   $locationProvider.html5Mode(true);
}]);

tool3App.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);
