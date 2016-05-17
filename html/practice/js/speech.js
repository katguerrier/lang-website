var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.lang = 'ja';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = false;

var transcript = "";
var stop = 0;

$("#speechControl").click(function() {
  recognition.start();
});

$("#speechEnd").click(function() {
  console.log(transcript);
  stop = 1;
  recognition.stop();
})

$(".btn-danger").click(function(event) {
  recognition.lang = $(event.target).attr('id');
  $('#langDisp').text('Lang = ' + recognition.lang);
})

recognition.onresult = function(event) {
  $("#textDisp").html(
    transcript + " <span style=\"color: red;\">" + event.results[0][0].transcript + "</span> "
    );
  transcript += " " + event.results[0][0].transcript;
}

recognition.onend = function() {
  if (!stop) {
    recognition.start();
  }
}

recognition.onerror = function(event) {
  console.log(event.error);
}