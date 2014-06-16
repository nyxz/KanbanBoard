'use strict';

/* Services */

var services = angular.module('kanbanServices', ['ngResource']);

services.service('KanbanService', ['$resource', function($resource) {
	this.loadBoard = $resource('api/board/:boardId', {}, {});
}]);