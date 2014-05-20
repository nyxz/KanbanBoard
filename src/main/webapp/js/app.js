'use strict';

/* App (Module) */

var kanbanBoard = angular.module("kanbanApp", ['ngRoute',
                                               'kanbanControllers',
                                               'kanbanBoardFilters']);

kanbanBoard.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/board', {
			templateUrl: '/partials/board.html',
			controller: 'LoadBoardController'
		})
//		.when('/project/:projectName', {
//			templateUrl: '/partials/board.html',
//			controller: 'ProjectBoardController'
//		})
		.otherwise({
			redirectTo : '/board'
		});
}]);