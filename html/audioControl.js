$().ready(function() {
	var audio = $('#player')[0];
	
	$('#play').click(function() {
		audio.play();
	});

	$('#pause').click(function() {
		audio.pause();
	});

	$('#volUp').click(function() {
		if (audio.volume <= 0.9) {
			audio.volume += 0.1;
		}
	});

	$('#volDown').click(function() {
		if (audio.volume >= 0.1) {
			audio.volume -= 0.1;
		}
	});

	$('#fast').click(function() {
		if (audio.playbackRate < 2) {
			audio.playbackRate += 0.25;
		}
	});

	$('#slow').click(function() {
		if (audio.playbackRate > 0.25) {
			audio.playbackRate -= 0.25;
		}
	});

	$('#replay').click(function() {
		audio.currentTime = 0;
		audio.play();
	});

	$('#forward').click(function() {
		if (audio.currentTime + 1 <= audio.duration)
		audio.currentTime += 1;
	});

	$('#rewind').click(function() {
		if (audio.currentTime - 1 >= 0) {
			audio.currentTime -= 1;
		}
	});
});