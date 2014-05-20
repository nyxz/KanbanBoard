'use strict';

/* Controllers */

var kanbanControllers = angular.module('kanbanControllers', []);

kanbanControllers.controller('LoadBoardController', ['$scope', function ($scope) {
	$scope.board = {
			"id" : 1, 
			"name": "Simple Kanban board", 
			"tasks": [{
					"id": 1,
					"summary": "Create GitHub project",
					"description": "Prepare GitHub project where to build the prsentation app",
					"status": "TODO",
					"priority": 1 },
				{
					"id": 2,
					"summary": "Create app skeleton",
					"description": "Create the app skeleton with Maven and Spring MVC",
					"status": "IN_PROGRESS",
					"priority": 2 }
			]};
}]);