'use strict';

/* App (Module) */

var kanbanBoard = angular.module("kanbanApp", ['ngRoute',
                                               
                                               'kanbanControllers',
                                               'kanbanBoardFilters',
                                               'kanbanServices']);

kanbanBoard.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/board', {
			templateUrl: 'partials/boards.html',
			controller: 'LoadAllBoardsController'
		})
		.when('/board/:boardId', {
			templateUrl: 'partials/board.html',
			controller: 'LoadBoardController'
		})
		.otherwise({
			redirectTo : '/board'
		});
}]);