function displayMessage() {
	let moreAnswerDetails = $(`<p class = "answerExplaination">` + questionAndAnswers[currentQuestion-1].answerDetails + `</p>`)
	let insertGif = $(`<img src=` + questionAndAnswers[currentQuestion-1].animatedGifs + `>`);
	const renderButton = $(`<button class = "feedback_page_button btn btn-primary btn-lg" type="submit"> 
						Next Question </button>`)
	if (userAnswer == questionAndAnswers[currentQuestion-1].answer) {
		const message = $(`<p class= "message_header"> Nice! You got it right! </p>`);
		$('.feedback_page_content').append(message);
		currentUserScore++;
	} else {
		const message = $(`<p class = "message_header"> Wrong! </p>`);
		$('.feedback_page_content').append(message);
	}
	$('.feedback_page_content').append(insertGif);
	$('.feedback_page_content').append(moreAnswerDetails);
	$('.feedback_page_content').append(renderButton);

	}
	// This decides which message to display to the user depending 
	// on if they got the question right or not
	// increases user score

function goToNextQuestion () {
	$('.feedback_page'). on('click', '.feedback_page_button', function () {
		const modal = document.getElementById('modal');
		modal.style.display = "none";
		currentQuestion +=1;
		$('.feedback_page_content').empty();
		displayCurrentQuestionNum();

		if (currentQuestion<=10) {
			renderCurrentQuestion();
			displayQuestionAnswers();
			} else {
				displayFinalMessage();
				renderFinalPage();
			}
		//clear text .feedback_page_content for next question
		//increases currentQuestion++
		//render the final page if there are no more questions left
	}
		)
}