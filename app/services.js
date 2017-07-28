'use strict';

/* Services */
var tool3Services = angular.module('appServices', ['ngResource']);

/**
 *    Service to : CRUD persistence wheel deflections
 *    @author
 */
tool3Services.factory('WheelDeflection', ['$resource', 'Globals', function($resource, Globals) {
    return {
        query: function (wd) {
            var id = angular.isDefined(wd.id) ? '/' + wd.id : '';
            return $resource('/wheel_deflections'+ id +'.json', {}, {
                index: { method: 'GET', headers: Globals.commonHeaders(), isArray: true},
                create: { method: 'POST', headers: Globals.commonHeaders(), params: {}, isArray: false},
                show: { method: 'GET', headers: Globals.commonHeaders(), params:{}, isArray: false},
                update: { method: 'PUT', headers: Globals.commonHeaders(), params: {}, isArray: false},
                destroy: { method: 'DELETE', headers: Globals.commonHeaders(), params: {}, isArray: false}
            });
        }
    }
}]);

/**
 *    Service to : Set global service methods
 *    @author
 */
tool3Services.factory('Globals', function($http) {
    return {
        commonHeaders: function() {
            $http.defaults.headers.common['Content-Type'] = "application/json";
        }
    }
});
