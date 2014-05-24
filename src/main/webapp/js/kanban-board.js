var TODO = '#todo';
var IN_PROGRESS = '#progress';
var DONE = '#done';


$(document).ready(function() {
//	loadExampleData();
	initiateBoards();
});

function initiateBoards() {
	$("ul.droptrue").sortable({
		connectWith : "ul",
		cancel : ".title",
		activate : function( event, ui ) {
			ui.item.addClass("dragged");
		},
		deactivate : function( event, ui ) {
			ui.item.removeClass("dragged");
		}
	});

	$("ul.dropfalse").sortable({
		connectWith : "ul",
		dropOnEmpty : false,
		cancel : ".title"
	});
}

function loadExampleData() {
	$.getJSON("board", function(data) {
		var items = [];
		$.each(data.tasks, function(key, val) {
			items.push("<li class='ui-corner-all' id='" + key + "'>" + val.summary + "</li>");
		});
		$(items.join("")).appendTo("#todo");
	});
}
