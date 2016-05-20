/**
 * @license MailJS
 * (c) 2016-2016 MailJS, https://mailjs.net
 * License: MIT
 */

(function() {
    'use strict';
    var app = angular.module('MailJS');

    app.controller('mainCtrl', function($scope, Modernizr) {
        $scope.title = "MailJS test";
		$scope.fullSupport = true;
		$scope.missingSupport = [];

		//Feature detection
		for (var feature in Modernizr) {
			if (typeof Modernizr[feature] === "boolean" && Modernizr[feature] === false) {
				console.error('[ERR] Missing support for '+feature);
				$scope.missingSupport.push(feature);
				$scope.fullSupport = false;
			}
		}
    });
})();
