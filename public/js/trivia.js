function check(){

	var question1 = document.trivia.question1.value;
	var question2 = document.trivia.question2.value;
	var question3 = document.trivia.question3.value;
	var question4 = document.trivia.question4.value;
	var question5 = document.trivia.question5.value;
	var correct = 0;


	if (question1 == "A") {
		correct++;
}
	if (question2 == "D") {
		correct++;
}	
	if (question3 == "B") {
	correct++;
}
	if (question4 == "C") {
	correct++;
}
	if (question5 == "C") {
		correct++;
	}
	
	var score;

	if (correct == 0) {
		score = 5;
	}

	if (correct > 0 && correct < 5) {
		score = 2;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "Score " + correct + "/5";
	}
	
