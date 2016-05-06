// Note to self: to find the code that used to be up here for dynamic phrases,
// check back in the old dir in the GDrive.

/* This should have parameters for lesson, maybe, in the future? What's the best way to do...?
 * All readings are supposed to stress different aspects of the language...
 * All readings have a set of attached questions; which reading we choose determines which
 * questions we should be generating. 
 */


// Reading class...
function reading(lessonNumber, standards) {
	this.lessonNumber = number;
	this.standards = standards;
	this.isRead = 0; // Is this necessary? Structure...
};


// How do we genericize readings?
/*
var readingL1 = "<p>十一月二十五日（土）	雨</p><p>今日は朝から雨が降っていた。
			午前中は友達にメールを書いて、一時間ぐらい音楽を聞いた。</p><p>ひるごろメアリーの家娃言った。
			白くて、大きい家だった。メアリーのホストファミリーの山本さんに会った。お父さんは背が高くて、
			やせている人だった。</p><p>家で、晩御飯を食べた。お母さんは「何もありませんが」と言っていたが、
			たくさんご馳走があった。晩御飯はとてもおいしかった。お母さんは料理がすごく上手だと思う。晩御飯の後、
			いろいろな話をした。そして、綺麗な着物をもらった。お母さんは少し古いといっていたが、すごく綺麗だ。
			メアリーのホストファミリはとても親切で楽しかった。</p>"
*/

var exQuest1 = "スーさんはどんな着物をもらったか。";
var exAns1 = ["古くて、綺麗な着物をもらった", "新しい着物をもらった", "古くて、綺麗じゃない着物をもらった", "ずたずた着物をもらった"];
var exCorrAns = ["古くて、綺麗な着物をもらった"];

function generateQuestion(question, answers, correctAnswer) {
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	var number = 0;

	var questionTemplate = "<form name=\"question\"" + number.toString() + "\"> <p>" + question + "</p>";
	var answerTemplate = "";
 
	for (var i=0 in answers) {
		answerTemplate += "<input type=\"radio\" name=\"answer" + i.toString() + "\" value=\"" + answers[i] + "\"> " + answers[i] + "<br />";
		i++;
	};

	var returnVal = questionTemplate + answerTemplate;
	return returnVal;
};

$("#readingQuestions").append(generateQuestion(exQuest1, exAns1, exCorrAns));