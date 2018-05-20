const finalScoreGIFS = [
	["https://media.giphy.com/media/kkSkgexb9xBoQ/giphy.gif"],
	["https://media.giphy.com/media/qvDtetpLLmaMo/giphy.gif"],
	["https://media.giphy.com/media/KvueMnd3bCtMc/giphy.gif"],
	["https://media.giphy.com/media/ID9RvkO3WyowM/giphy.gif"],
	["https://media.giphy.com/media/w461tXo03sQP6/giphy.gif"],
	["https://media.giphy.com/media/WPTzkMvz8wZtC/giphy.gif"],
]

function displayFinalMessage () {
	const renderPlayAgainButton = $(`<button class = "play_again_button btn btn-success btn-lg" type="submit"> Play Again</button>`); 
	if (currentUserScore === 10) {
		$(".final_page").append(`<p> Wow! You got ` + currentUserScore + `/10 questions right! You are a true avatar </p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[0] + `>`);
	} else if (currentUserScore === 9) {
		$(".final_page").append(`<p> You got ` + currentUserScore + `/10 questions right! Aangtastic! </p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[1] + `>`);
	} else if (currentUserScore >=7) {
		$(".final_page").append(`<p> Nice Job! You got ` + currentUserScore + `/10 questions right! </p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[2] + `>`);
	} else if (currentUserScore >=5) {
		$(".final_page").append(`<p> Ehhhh. You got ` + currentUserScore + `/10 questions right. There's room for improvement </p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[3] + `>`);
	} else if (currentUserScore >=3) {
		$(".final_page").append(`<p> You got ` + currentUserScore + `/10 questions right. You just pulled a Sokka... Keep studying</p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[4] + `>`);
	} else {
		$(".final_page").append(`<p> You got ` + currentUserScore + `/10 questions right. You've got a long way to go. Keep studying! </p>`)
		$(".final_page").append(`<img src=` + finalScoreGIFS[5] + `>`);
	}
	$(".final_page").append(renderPlayAgainButton)
	$(".final_page").append(renderPlayAgainButton)
}

function resetGame () {
	$(".final_page").on('click', '.play_again_button', function() {
		$(".final_page").empty();
		currentUserScore = 0;
		currentQuestion = 1;
		renderCurrentQuestion();
		displayQuestionAnswers();
		displayCurrentQuestionNum ()

		$(".final_page").hide();
		$(".question_page").show();
	})
}

$(resetGame());