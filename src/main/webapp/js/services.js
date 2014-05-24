'use strict';

/* Services */

var services = angular.module('kanbanServices', ['ngResource']);

services.service('KanbanService', ['$resource', function($resource) {
	this.getDefaultBoard = $resource('board', {}, {});
}]);