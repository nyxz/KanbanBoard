'use strict';

/* App (Module) */

var kanbanBoard = angular.module("kanbanApp", ['ngRoute',
                                               
                                               'kanbanControllers',
                                               'kanbanBoardFilters',
                                               'kanbanServices']);

kanbanBoard.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/board/:boardId', {
			templateUrl: 'partials/board.html',
			controller: 'LoadBoardController'
		})
		.otherwise({
			redirectTo : '/board/0'
		});
}]);