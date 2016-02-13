/*
 * This is all for dynamically generated phrasings of the question and whatnot; we'll reuse
 * this somewhere, but probably not here.

function Question(lesson, phrasing, answers, correctAns) {
	this.lesson = lesson;
	this.phrasing = phrasing;
	this.answers = answers;
	this.correctAns = correctAns;
};

function Phrase(topic, time, place, object, predicate) {
	this.topic = topic;
	this.time = time;
	this.place = place;
	this.object = object;
	this.predicate = predicate;
};

var l1r1phrase = new Phrase("スーさんは", "いつ", null, "着物を", "もらった");
var l1r1answers = ["古くて、綺麗な着物をもらった", "新しい着物をもらった", "古くて、綺麗じゃない着物をもらった", "ずたずた着物をもらった"];
var l1r1correctAns = ["古くて、綺麗な着物をもらった"];
var lesson1_reading1 = new Question('1', l1r1phrase, l1r1answers, l1r1correctAns);

function genPhrase(phrase) {
	topicSwitch = 0;
	timeSwitch = 0;
	objectSwitch = 0;
	placeSwitch = 0;

	questionPhrasing = [];
	
	// check if we have a topic, time, object, and place, so we can generate w/ those params
	if (phrase.topic !=== null) { topicSwitch = 1; };
	if (phrase.time !=== null) { timeSwitch = 1; };
	if (phrase.object !=== null) { objectSwitch = 1; };
	if (phrase.place !=== null) { placeSwitch = 1; };


};
*/

var exQuest1 = "スーさんはどんな着物をもらったか。";
var exAns1 = ["古くて、綺麗な着物をもらった", "新しい着物をもらった", "古くて、綺麗じゃない着物をもらった", "ずたずた着物をもらった"];
var exCorrAns = ["古くて、綺麗な着物をもらった"];

function generateQuestion(question, answers, correctAnswer) {
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	var number = 0;

	var questionTemplate = number+1 + ". <form name=\"question\"" + number.toString() + "\"> <span class=\"question\">" + question + "</p>";
	var answerTemplate = "";
 
	for (var i=0 in answers) {
		answerTemplate += "<input type=\"radio\" name=\"answer" + i.toString() + "\" value=\"" + answers[i] + "\"> " + answers[i] + "<br />";
		i++;
	};

	var returnVal = questionTemplate + answerTemplate;
	return returnVal;
};

$(".questionHolder").append(generateQuestion(exQuest1, exAns1, exCorrAns));