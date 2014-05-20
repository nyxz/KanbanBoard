'use strict';

/* Filters */

var STATUS_TODO = 'TODO';
var STATUS_IN_PROGRESS = 'IN_PROGRESS';
var STATUS_DONE = 'DONE';

var filters = angular.module('kanbanBoardFilters', []);

filters.filter('todoTaskFilter', function () {
	return function(tasks) {
		return taskFilter(tasks, STATUS_TODO);
	}
});

var taskFilter = function(tasks, status) {
	var filteredTasks = []
	for (var i = 0; i < tasks.length; i++) {
		var currTask = tasks[i];
		if (currTask.status == status) {
			filteredTasks.push(currTask);
		}
	}
	return filteredTasks;
}