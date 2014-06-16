'use strict';

/* Controllers */

var kanbanControllers = angular.module('kanbanControllers', []);

kanbanControllers.controller('LoadBoardController', ['$scope', '$routeParams', 'KanbanService', 
                                                     function ($scope, $routeParams, KanbanService) {
	$scope.board = KanbanService.loadBoard.get({boardId: $routeParams.boardId});
}]);


kanbanControllers.controller('LoadAllBoardsController', ['$scope', 'KanbanService', 
                                                     function ($scope, KanbanService) {
	$scope.boards = KanbanService.loadBoards.query();
}]);
