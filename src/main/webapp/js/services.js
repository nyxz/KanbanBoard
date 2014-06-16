'use strict';

/* Services */

var services = angular.module('kanbanServices', ['ngResource']);

services.service('KanbanService', ['$resource', function($resource) {
	this.loadBoard = $resource('api/board/:boardId', {}, {});

	this.loadBoards = $resource('api/board/all', {}, {});
}]);