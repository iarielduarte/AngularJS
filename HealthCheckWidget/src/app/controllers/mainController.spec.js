/*@ARIEL DUARTE 09/22/16*/
'use strict';

describe('Controllers => MainController', function () {

    var controller, $scope;

    beforeEach(module('healthCheckWidget', function ($provide) {
        $provide.value('APP_ENV', {
            serveUrl: ''
        });
    }));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('MainController', {
            $scope: $scope
        });
    }));

    it('should have a title', function () {
        expect(controller.title).toEqual("Health Check Services");
    });
});
