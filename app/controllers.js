'use strict';

/* Controllers */
var tool3Controllers = angular.module('appControllers', []);

/**
 *    Controller to : Initialize application
 *    @author
 */
tool3Controllers.controller('MainCtrl', ['$scope', '$rootScope', '$modal', '$window', 'WheelDeflection', 'Globals', function($scope, $rootScope, $modal, $window, WheelDeflection, Globals) {

    var user = { name: 'admin', email: 'admin@example.com' };

    $scope.initData = function() {
        
        $scope.wd = {
            type: null,            
            tire_width: {
                value: null,
                unit: null
            },            
            compression_modulus: {
                value: null,
                unit: null
            },            
            load_on_wheel: {
                value: null,
                unit: null
            },            
            tread_thickness: {
                value: null,
                unit: null
            },            
            outside_radius:{
                value: null,
                unit: null
            }            
        };
    };
    
    $scope.initData();
    console.log($scope.wd);

    $scope.tireWidthBG = function() {
        if($scope.wd.tire_width.value == null && $scope.wd.tire_width.unit == null) {
            return 'btn-danger';
        } else if ($scope.wd.tire_width.value != null || $scope.wd.tire_width.unit != null) {
            return 'btn-success';
        }
    };

    $scope.compressionModulusBG = function() {
        if($scope.wd.compression_modulus.value == null && $scope.wd.compression_modulus.unit == null) {
            return 'btn-danger';
        } else if ($scope.wd.compression_modulus.value != null || $scope.wd.compression_modulus.unit != null) {
            return 'btn-success';
        }
    };

    $scope.loadOnWheelBG = function() {
        if($scope.wd.load_on_wheel.value == null && $scope.wd.load_on_wheel.unit == null) {
            return 'btn-danger';
        } else if ($scope.wd.load_on_wheel.value != null || $scope.wd.load_on_wheel.unit != null) {
            return 'btn-success';
        }
    };

    $scope.treadThicknessBG = function() {
        if($scope.wd.tread_thickness.value == null && $scope.wd.tread_thickness.unit == null) {
            return 'btn-danger';
        } else if ($scope.wd.tread_thickness.value != null || $scope.wd.tread_thickness.unit != null) {
            return 'btn-success';
        }
    };

    $scope.outsideRadiusBG = function() {
        if($scope.wd.outside_radius.value == null && $scope.wd.outside_radius.unit == null) {
            return 'btn-danger';
        } else if ($scope.wd.outside_radius.value != null || $scope.wd.outside_radius.unit != null) {
            return 'btn-success';
        }
    };


    // Function to dynamically generate label of tire width button
    $scope.tireWidthBtn = function () {
        var label = "Tire Width";

        if($scope.wd.tire_width.value != null && $scope.wd.tire_width.unit != null) {
            label = label + " : " + $scope.wd.tire_width.value + " " + $scope.wd.tire_width.unit;            
        }

        return label;
    };

    // Function to dynamically generate label of compression modulus button
    $scope.compressionModulusBtn = function () {
        var label = "Compression Modulus";

        if($scope.wd.compression_modulus.value != null && $scope.wd.compression_modulus.unit != null) {
            label = label + " : " + $scope.wd.compression_modulus.value + " " + $scope.wd.compression_modulus.unit;            
        }

        return label;
    };

    // Function to dynamically generate label of load on wheel button
    $scope.loadOnWheelBtn = function () {
        var label = "Load on Wheel";

        if($scope.wd.load_on_wheel.value != null && $scope.wd.load_on_wheel.unit != null) {
            label = label + " : " + $scope.wd.load_on_wheel.value + " " + $scope.wd.load_on_wheel.unit;            
        }

        return label;
    };

    // Function to dynamically generate label of tread thickness button
    $scope.treadThicknessBtn = function () {
        var label = "Tread Thickness";

        if($scope.wd.tread_thickness.value != null && $scope.wd.tread_thickness.unit != null) {
            label = label + " : " + $scope.wd.tread_thickness.value + " " + $scope.wd.tread_thickness.unit;            
        }

        return label;
    };

    // Function to dynamically generate label of outside radius button
    $scope.outsideRadiusBtn = function () {
        var label = "Compression Modulus";

        if($scope.wd.outside_radius.value != null && $scope.wd.outside_radius.unit != null) {
            label = label + " : " + $scope.wd.outside_radius.value + " " + $scope.wd.outside_radius.unit;            
        }

        return label;
    };

    $scope.openDeflectionProperty = function (dt) {
        $scope.wd.type = dt;
        $scope.$modalInstance = $modal.open({
            scope: $scope,
            templateUrl: 'add-deflection-property-modal.html',
            size: 'lg',
            animation: false
        });
    };

    $scope.submitDeflectionProperty = function () {
        console.log($scope.wd);        
        $scope.close();
    };

    $scope.resetWheelDeflections = function () {
        if($scope.wd.type === 'TW') {
            $scope.wd.tire_width = { value: null, unit: null };            
        } else if($scope.wd.type === 'CM') {
            $scope.wd.compression_modulus = { value: null, unit: null };            
        } else if($scope.wd.type === 'LOW') {
            $scope.wd.load_on_wheel = { value: null, unit: null };        
        } else if($scope.wd.type === 'TH') {            
            $scope.wd.tread_thickness = { value: null, unit: null };        
        } else if($scope.wd.type === 'OR') {
            $scope.wd.outside_radius = { value: null, unit: null };            
        }
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
}]);

/**
 *    Controller to : Exception handler
 *    @author
 */
tool3Controllers.controller('ExceptionHandlerCtrl', ['$scope', function($scope) {

}]);
