const questionAndAnswers = [
	{
		question: "In which episode does Azula first appear in Avatar the Last Airbender?",
		answerOptions: ["A. The Storm", "B. Imprisoned", "C. The Deserter", "D. The Avatar State"],
		answer: "D. The Avatar State",
		answerDetails: "Azula first appears in this first episode of season 2 and can be seen practicing lighting generation",
		animatedGifs: "https://media.giphy.com/media/ZINSwP5kQxM3e/giphy.gif"
	},
	{
		question: "Who was the first ever Avatar?" ,
		answerOptions: ["A. Avatar Wan","B. Avatar Kyoshi", "C. Avatar Roku", "D. Avatar Kuruk"],
		answer: "A. Avatar Wan",
		answerDetails: "It was revealed in Avatar’s spinoff, The Legend of Korra, that Avatar Wan became the first avatar when he fused with the spirit Ravva to stop the spirit Vatu from taking over the world",
		animatedGifs: "https://media.giphy.com/media/11fbOCAyRrLXZS/giphy.gif"
	}, 
	{
		question: "What animal is the keeper of the library?",
		answerOptions: ["A. A Monkey","B. A Bird", "C. A Dragon", "D. A Gorilla"],
		answer: "B. A Bird",
		answerDetails: "The keeper of the library is an Owl named Wan Shi Tong, he who knows ten thousand things. He guards the library from humans who only want knowledge to gain power over others",
		animatedGifs: "https://media.giphy.com/media/zjrTWpLdoOLIc/giphy.gif"
	},
	{ 
		question: "What is Iroh's favorite tea?" ,
		answerOptions: ["A. Green Tea","B. Jasmine", "C. Jin Suo Chi", "D. Da Hong Pao"],
		answer: "B. Jasmine",
		answerDetails: "Iroh actually has two favoirte teas, Jasmine and Ginseng",
		animatedGifs: "https://media.giphy.com/media/ZvJ0bHvAy1N9S/giphy.gif"
	}, 
	{
		question: "Who helps Aang escape from The Boiling Rock by betraying Azula?",
		answerOptions: ["A. Mai","B. Zuko", "C. Ty Lee", "D. Iroh"],
		answer: "A. Mai",
		answerDetails: "Mai saves the gang by taking out the guards who are cutting cables that the gang is on. She states that she does it because she loves Zuko more than she fears Azula.",
		animatedGifs: "https://media.giphy.com/media/fmfQm60NbAqSk/giphy.gif"
	}, 
	{
		question: "How many years was Aang trapped in an iceberg?",
		answerOptions: ["A. 50 years","B. 100 years", "C. 150 years", "D. 200 years"],
		answer: "B. 100 years",
		answerDetails: "Aang first became trapped in the iceberg after being told he would be sent away from his guardian to the Eastern Air Temple to complete his training. Due to a storm, he crashed into the water and entered the Avatar state to freeze him in an iceberg",
		animatedGifs: "https://media.giphy.com/media/12hFaotwTE97t6/giphy.gif"
	},
	{ 
		question: "In what episode does Katara learn a different type of bending?" ,
		answerOptions: ["A. The Runaway","B. The Painted Lady", "C. The Awakening", "D. The PuppetMaster"],
		answer: "D. The PuppetMaster",
		answerDetails: "Katara is forced to bloodbend after Hama takes control of Aang and Sokka and tries to kill them",
		animatedGifs: "https://media.giphy.com/media/AhtYisgsdAHFS/giphy.gif"
	},
	{ 
		question: "How many episodes of avatar the last airbender are there?" ,
		answerOptions: ["A. 42","B. 54", "C. 61", "D. 80"],
		answer: "C. 61",
		answerDetails: "There are a total of 61 episodes of avatar the last airbender while its spinoff series is made up of 52 episodes",
		animatedGifs: "https://media.giphy.com/media/DL2meIsHZQrbq/giphy.gif"
	},
	{ 
		question: "What weapon does Sokka learn to use in season 3?",
		answerOptions: ["A. The Boomerang","B. Bo Staff", "C. Bow & Arrow", "D. The Sword"],
		answer: "D. The Sword",
		answerDetails: "In the episode, Sokka’s Master, Sokka feels useless to the team since he cannot bend and is chosen to study under Master Piandao to learn sword fighting",
		animatedGifs: "https://media.giphy.com/media/u9EmN1UFWneiA/giphy.gif"
	},
	{
		question: "What type of bending is Aang hesitant to learn?",
		answerOptions: ["A. Firebending","B. Waterbending", "C. Earthbending", "D. Energybending"],
		answer: "A. Firebending",
		answerDetails: "In the episode The Deserter, Aang loses control of his firebending and ends up burning Katara. From that moment he becomes scared to use firebending.",
		animatedGifs: "https://media.giphy.com/media/llcJe3nIFR7Ow/giphy.gif"
	} 
];

let currentQuestion = 1;
let userAnswer;
let currentUserScore = 0;

function renderCurrentQuestion() {
	$(".questionBox").text("");
	$(".questionBox").text(questionAndAnswers[currentQuestion-1].question)
}

function displayQuestionAnswers() {
	$(".answer_text_A").text("")
	$(".answer_text_A").text(questionAndAnswers[currentQuestion-1].answerOptions[0])
	$(".answer_text_B").text("")
	$(".answer_text_B").text(questionAndAnswers[currentQuestion-1].answerOptions[1])
	$(".answer_text_C").text("")
	$(".answer_text_C").text(questionAndAnswers[currentQuestion-1].answerOptions[2])
	$(".answer_text_D").text("")
	$(".answer_text_D").text(questionAndAnswers[currentQuestion-1].answerOptions[3])
	// this will display the cooresponding answers within each .answerBox
}

function submitUserAnswer () {
	$('.question_form').submit(event => {
		event.preventDefault();
	})
	$('.question_form').on('click', '.submitAnswerButton', function () {
		if (document.getElementById('answer_A').checked) {
			userAnswer = questionAndAnswers[currentQuestion-1].answerOptions[0];
			popUpFeedbackPage();
		} else if (document.getElementById('answer_B').checked) {
			userAnswer = questionAndAnswers[currentQuestion-1].answerOptions[1];
			popUpFeedbackPage();
		}  else if (document.getElementById('answer_C').checked) {
			userAnswer = questionAndAnswers[currentQuestion-1].answerOptions[2];
			popUpFeedbackPage();
		} else if (document.getElementById('answer_D').checked) {
			userAnswer = questionAndAnswers[currentQuestion-1].answerOptions[3];
			popUpFeedbackPage();
		}
	})
}
	// this will be pressed by the user to submit their answer selection
	// which will be compared to the correct answer for the current question
	// It will also call on the feedbackPage to be overlayed

function popUpFeedbackPage () {
	displayMessage();
	const modal = document.getElementById('modal');
	modal.style.display = "block";
	// this will call the feedback_page and will display whether or not
	//the user got the question right using an if / else statement
}


function displayCurrentQuestionNum () {
	let updatedQuestionNum = $(`<p class = "scoreBox1"> Question: ` + currentQuestion + `/10</p>`);
	$('.userScore').empty();
	$('.userScore').append(updatedQuestionNum);
	displayUserScore();
}

function displayUserScore () {
	let updatedUserScore = $(`<p class = "scoreBox1"> Airbender Knowledge` + currentUserScore + `/10</p>`);
	$('.userScore').append(updatedUserScore);
}

function renderFinalPage () {
	$(".question_page").hide();
	$(".final_page").show();
	//clears the current form and html to be replaced by the final_page
}

$(renderCurrentQuestion());
$(displayQuestionAnswers());
$(goToNextQuestion());
$(submitUserAnswer());
