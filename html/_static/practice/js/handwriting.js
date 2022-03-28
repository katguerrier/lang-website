// Denn Guerrier - 19 mai 2016
$(document).ready(function() {
	// we may use this if we do end up tracking strokes in the future
	// var coords = [];

	var flag = 0; // used to track if mouse is held for drawing	
	
	// canvas data
	var canvas = $('#hwCanvas');
	var width = canvas.width()
	var height = canvas.height()
	var rect = canvas[0].getBoundingClientRect(); // offset

	// draw style
	var context = canvas[0].getContext('2d');
	context.fillStyle = 'black';
	context.lineWidth = 1;

	canvas.mousedown(function(event) {
		flag = 1;

		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		context.fillRect(x, y, 4, 4);
	});

	// user may move just outside the canvas before releasing; 
	// we still want to trigger if they do
	$('body').mouseup(function(event) {
		// unused for now -- see below
		// recordStroke();
		flag = 0;
	});

	$('canvas').mousemove(function(event) {
		if (flag) {
			var x = event.clientX - rect.left;
			var y = event.clientY - rect.top;
			context.fillRect(x, y, 4, 4);
		}
	});

	// we may use this in order to build a conceptual picture of
	// intersecting strokes in case we do want to use our own ocr algorithm
	// function recordStroke() {
	// 	return;
	// }
});