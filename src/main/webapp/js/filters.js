'use strict';

/* Filters */

var STATUS_TODO = 'TODO';
var STATUS_IN_PROGRESS = 'IN_PROGRESS';
var STATUS_DONE = 'DONE';

var filters = angular.module('kanbanBoardFilters', []);

filters.filter('todoTaskFilter', function () {
	return function(tasks) {
		return taskFilter(tasks, STATUS_TODO);
	};
});

filters.filter('inProgressTaskFilter', function () {
	return function(tasks) {
		return taskFilter(tasks, STATUS_IN_PROGRESS);
	};
});

filters.filter('doneTaskFilter', function () {
	return function(tasks) {
		return taskFilter(tasks, STATUS_DONE);
	};
});

var taskFilter = function(tasks, status) {
	if (tasks == undefined || tasks.length == 0) {
		return;
	}
	var filteredTasks = []
	for (var i = 0; i < tasks.length; i++) {
		var currTask = tasks[i];
		if (currTask.status == status) {
			filteredTasks.push(currTask);
		}
	}
	return filteredTasks;
}