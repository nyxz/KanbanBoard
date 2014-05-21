'use strict';

/* Services */

var services = angular.module('kanbanServices', ['ngResource']);

services.factory('KanbanService', ['$resource', function($resource) {
	return $resource('board', {}, {});
}]);