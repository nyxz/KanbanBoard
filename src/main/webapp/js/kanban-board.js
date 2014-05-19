var TODO = '#todo';
var IN_PROGRESS = '#progress';
var DONE = '#done';


$(document).ready(function() {
	loadExampleData();
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

	$(TODO + ", " + IN_PROGRESS + ", " + DONE).disableSelection();
}

function loadExampleData() {
	$.getJSON("boards/23", function(data) {
		var items = [];
		$.each(data, function(key, val) {
			items.push("<li id='" + key + "'>" + val + "</li>");
		});
		$("<ul/>", {
			"class" : "my-new-list",
			html : items.join("")
		}).appendTo("body");
	});
}
