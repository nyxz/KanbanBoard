$(document).ready(function() {
	loadExampleData();
	initiateBoards();
});

function initiateBoards() {
	$("ul.droptrue").sortable({
		connectWith : "ul"
	});

	$("ul.dropfalse").sortable({
		connectWith : "ul",
		dropOnEmpty : false
	});

	$("#sortable1, #sortable2, #sortable3").disableSelection();
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
