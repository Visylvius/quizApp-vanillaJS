//quiz questions

var quiz = {
  name: "How much do you know about the Strawhat Crew?",
  statement: 'Lets Find Out!',
  questions:
 [

  //question 1
  {
    question: 'Who was the first member of the Strawhat Pirates?',
    options: ['Sanji', 'Zoro', 'Nami', 'Chopper'],
    answer: 1
  },
  //question 2
  {
    question: "Who had Luffy's hat first?",
    options: ['Shanks', 'Gol D. Roger', 'Portagas D. Ace', 'Rayleigh'],
    answer: 2
  },
  //question 3
  {
    question: 'Who is Brook searching for?',
    options: ['Laboon', 'The Rumble Pirates', 'Dracule Mihawk', 'Kaido the Beast'],
    answer: 0
  },
  //question 4
  {
    question: 'Who is the current user of the Mera Mera no mi?',
    options: ['Monkey D. Dragon', 'Ivankov', 'Sabo', 'Portagas D. Ace'],
    answer: 2
  },
  //question 5
  {
    question: "Which of the following crewmembers have not eaten a devil's fruit when they joined?",
    options: ['Brook', 'Zoro', 'Luffy', 'Robin'],
    answer: 1
  },
  //question 6
  {
    question: 'Which Strawhat crew member has had thier bounty for the longest time?',
    options: ['Robin', 'Sanji', 'Nami', 'Franky'],
    answer: 0
  },
  //question 7
  {
    question: 'What does Franky use to fuel his cyborg body?',
    options: ['Oil', 'Devil Fruits', 'Cola', 'Tea'],
    answer: 2
  },
  //question 8
  {
    question: "What is Luffy's Favorite Food",
    options: ['Meat', 'Foie Gras', 'Grand Slam', 'Fish'],
    answer: 0
  },
  // question 9
  {
    question: "Which crewmate has a family member in the Marines?",
    options: ['Zoro', 'Usopp', 'Nami', 'Luffy'],
    answer: 3
  },
  //question 10
  {
    question: 'Which crewmate did Luffy fight with before they joined the crew?',
    options: ['Robin', 'Nami', 'Franky', 'Zoro'],
    answer: 2
  }
]
};

//variables
var questionNum = 0;
var correctAnswerTotal = 0;
var formValue;
var form = document.getElementById('Quiz');
var intro = document.getElementById('intro');
var result = document.getElementById('result');
var quizQuestions = document.getElementById('mainQuiz');
document.getElementById('quiz.name').innerHTML = quiz.name;
quizQuestions.className = 'hide';
result.className = result.className + 'hide';
var node;
var myHTML;

//gets input value and increases correctAnswerTotal by 1 if answered correctly. Then checks to see if all the questions have been finished.
function getInputValue(event) {
  event.preventDefault();
	formValue = document.querySelector('input[name="choices"]:checked').value;
  if ( Number(formValue) === quiz.questions[questionNum].answer) {
    correctAnswerTotal++;
	}
  questionNum++;
  if (questionNum === quiz.questions.length) {
    result.className = result.className + 'show';
		quizQuestions.className = 'hide';
    document.getElementById('show-score').innerHTML = 'You got ' + correctAnswerTotal + ' out of ' + quiz.questions.length + ' correct';
  } else {
    displayQuestion();
  }
}
//dynamically creates HTML, and appends questions to the DOM
function displayQuestion() {
  var questionForm = document.getElementById('question').innerHTML =         	quiz.questions[questionNum].question;
  var optionsTotal = quiz.questions[questionNum].options.length;
  console.log(optionsTotal);
  document.getElementById('answers').innerHTML = '';
  for (var i = 0; i < optionsTotal; i++) {
    document.getElementById('questionNum').innerHTML = "Question " + (questionNum + 1) + " of " + 10;
    myHTML = '<input type="radio" id="choice'+ i + '" class="multipleChoice" name="choices" value="' + i + '">' +quiz.questions[questionNum].options[i] + '<br>';
	  var node = document.createElement('div');
    node.innerHTML = myHTML;
    document.getElementById('answers').appendChild(node);
  }
}
//when the start quiz button his hit, this function hides the intro HTML and shows the actual questions
function hideIntroSection(event) {
 event.preventDefault();
 var intro = document.getElementById('intro');
 intro.className = 'hide';
 console.log(intro.className);
 quizQuestions.className = 'show';
 displayQuestion();
}

//once the quiz has been completed this function shows the user the score,
function displayScore(event) {
	if (questionNum === quiz.questions.length) {
    result.className = result.className + 'show';
    multipleChoice.classname = multipleChoice.classname + 'hide';
  }
}

function startTheQuizOver(event) {
	event.preventDefault();
    questionNum = 0;
    correctAnswerTotal = 0;
    result.className = 'hide';
    intro.className = 'show';

}

form.addEventListener('submit', getInputValue, false);
intro.addEventListener('submit', hideIntroSection, false);
result.addEventListener('submit', startTheQuizOver, false);
