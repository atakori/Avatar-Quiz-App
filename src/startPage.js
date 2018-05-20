function hideInactiveSections () {
	$(".start_page").show();
	$(".question_page").hide();
	$(".final_page").hide();
}

function startQuiz () {
	$(".start_page").on('click', '.start_quiz_button', function() {
		$(".start_page").hide();
		$(".question_page").show();
	})
}

hideInactiveSections();
startQuiz();