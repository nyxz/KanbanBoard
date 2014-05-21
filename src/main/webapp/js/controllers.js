'use strict';

/* Controllers */

var kanbanControllers = angular.module('kanbanControllers', []);

kanbanControllers.controller('LoadBoardController', ['$scope', 'KanbanService', function ($scope, KanbanService) {
	$scope.board = KanbanService.get();
}]);