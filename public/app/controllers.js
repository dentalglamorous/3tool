'use strict';

/* Controllers */
var tool3Controllers = angular.module('appControllers', []);

/**
 *    Controller to : Initialize application
 *    @author
 */
tool3Controllers.controller('MainCtrl', ['$scope', '$rootScope', '$modal', '$window', 'WheelDeflection', 'Globals', function($scope, $rootScope, $modal, $window, WheelDeflection, Globals) {

    $scope.initData = {name: 'admin', email: 'admin@example.com'};
    $scope.wheelDeflections = [];

    $scope.loadWheelDeflections = function() {
        WheelDeflection.query({}).index().$promise.then(function (data) {            
            $scope.wheelDeflections = data;
            // console.log($scope.wheelDeflections);
        });
    };    

    $scope.newWD = {};
    $scope.createWheelDeflections = function () {
        $scope.$modalInstance = $modal.open({
            scope: $scope,
            templateUrl: 'new-wheel-deflection-modal.html',
            size: 'lg',
            animation: false
        });
    };

    $scope.submitWheelDeflection = function () {
        // console.log($scope.newWD);
        WheelDeflection.query({}).create({}, $scope.newWD).$promise.then(function(data) {
            // console.log(data);
            $scope.newWD = {};
            $scope.wheelDeflections.push(data);
            $scope.close();
        }, function(error) {
            //console.log(error);
        });
    };

    $scope.close = function () {
        $scope.$modalInstance.close();
    };

    $scope.deleteWheelDeflection = function (id, idx) {
        var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');

        if (deleteUser) {
            // console.log('Deleting...');
            WheelDeflection.query({id: id}).destroy().$promise.then(function(data) {
                $scope.wheelDeflections.splice(idx, 1);
            }, function(error) {
                //console.log(error);
            });
        }
    };

    $scope.loadWheelDeflections();
}]);

/**
 *    Controller to : Show details of wheel deflection using formulascontroller
 *    @author
 */
tool3Controllers.controller('WDShowCtrl', ['$scope', '$routeParams', 'WheelDeflection', function($scope, $routeParams, WheelDeflection) {

    // console.log($routeParams.id);
    $scope.deflection = {};

    $scope.loadWheelDeflection = function() {
        WheelDeflection.query({id: $routeParams.id}).show().$promise.then(function (data) {            
            $scope.deflection = data;
            // console.log($scope.deflection);
        });
    };

    $scope.print = function () {
        // console.log('printing...');
        var table = document.querySelector('div#wheel-deflections').innerHTML;
        var myWindow = window.open('', '', 'width=612, height=792');
        myWindow.document.write('<html><head><title>&nbsp;</title>');
        myWindow.document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" media="print" />');
        myWindow.document.write('</head><body >');
        myWindow.document.write(table);
        myWindow.document.write('</body></html>');
        myWindow.print();
    };

    $scope.loadWheelDeflection();
}]);

tool3Controllers.controller('WDEditCtrl', ['$scope', '$routeParams', '$modal', 'WheelDeflection', function($scope, $routeParams, $modal, WheelDeflection) {

    $scope.deflection = {};
    $scope.loadWheelDeflection = function() {
        WheelDeflection.query({id: $routeParams.id}).show().$promise.then(function (data) {
            $scope.deflection = data;
            // console.log($scope.deflection);
        });
    };

    $scope.openDeflectionProperty = function (dt) {
        $scope.deflection.type = dt;
        $scope.$modalInstance = $modal.open({
            scope: $scope,
            templateUrl: 'add-deflection-property-modal.html',
            size: 'lg',
            animation: false
        });
    };

    $scope.submitDeflectionProperty = function () {

        // console.log($scope.deflection);
        var params = {};

        if($scope.deflection.type === 'TW') {
            params.tire_width = $scope.deflection.tire_width;
            params.tire_width_unit = $scope.deflection.tire_width_unit;
        } else if($scope.deflection.type === 'CM') {
            params.compression_modulus = $scope.deflection.compression_modulus;
            params.compression_modulus_unit = $scope.deflection.compression_modulus_unit;
        } else if($scope.deflection.type === 'LOW') {
            params.load_on_wheel = $scope.deflection.load_on_wheel;
            params.load_on_wheel_unit = $scope.deflection.load_on_wheel_unit;
        } else if($scope.deflection.type === 'TH') {
            params.tread_thicknes = $scope.deflection.tread_thicknes;
            params.tread_thickness_unit = $scope.deflection.tread_thickness_unit;
        } else if($scope.deflection.type === 'OR') {
            params.outside_radius = $scope.deflection.outside_radius;
            params.outside_radius_unit = $scope.deflection.outside_radius_unit;
        }

        // console.log(params);

        WheelDeflection.query({ id: $routeParams.id }).update({}, params).$promise.then(function(data) {
            // console.log(data);
            $scope.close();
        }, function(error) {
            //console.log(error);
        });
    };

    $scope.resetWheelDeflections = function () {
        $scope.deflection.tire_width = null;
        $scope.deflection.tire_width_unit = '';
        $scope.deflection.compression_modulus = null;
        $scope.deflection.compression_modulus_unit = '';
        $scope.deflection.load_on_wheel = null;
        $scope.deflection.load_on_wheel_unit = '';
        $scope.deflection.tread_thicknes = null;
        $scope.deflection.tread_thickness_unit = '';
        $scope.deflection.outside_radius = null;
        $scope.deflection.outside_radius_unit = '';
    };

    $scope.close = function () {
        $scope.$modalInstance.close();
    };

    $scope.print = function () {
        // console.log('printing...');
        var table = document.querySelector('div#wheel-deflections').innerHTML;
        var myWindow = window.open('', '', 'width=612, height=792');
        myWindow.document.write('<html><head><title>&nbsp;</title>');
        myWindow.document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" media="print" />');
        myWindow.document.write('</head><body >');
        myWindow.document.write(table);
        myWindow.document.write('</body></html>');
        myWindow.print();
    };

    $scope.loadWheelDeflection();
}]);

/**
 *    Controller to : Exception handler
 *    @author
 */
tool3Controllers.controller('ExceptionHandlerCtrl', ['$scope', function($scope) {

}]);
