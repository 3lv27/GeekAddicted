//Splash Page
var body = document.getElementById('body');
var start = document.getElementById('start');
var titleGame = document.getElementById('gamename');


//Creating event listeners once the first page of the game is created
function createListeners() {
  var btnTrue = document.getElementById('true');
  btnTrue.addEventListener('click', correctAnswer);
  var btnFalse = document.getElementById('false');
  btnFalse.addEventListener('click', wrongAnswer);
}




// Creating the first Page of the game
function createGame() {
  body.removeChild(titleGame);
  body.removeChild(start);
  var header = document.createElement('header');
  header.setAttribute('id', 'title');
  body.appendChild(header);
  var title = document.createElement('h1');
  title.innerHTML = 'True or False';
  header.appendChild(title);
  var mainSection = document.createElement('section');
  mainSection.setAttribute('id', 'game');
  body.appendChild(mainSection);
  var divPlay = document.createElement('div');
  divPlay.setAttribute('id', 'play');
  mainSection.appendChild(divPlay);
  var divQuestion = document.createElement('div');
  divQuestion.setAttribute('id', 'question');
  divPlay.appendChild(divQuestion);
  var question = document.createElement('h2');
  question.innerHTML = 'Is Laravel a framework for JavaScript?';
  divQuestion.appendChild(question);
  var divAnswers = document.createElement('div');
  divAnswers.setAttribute('class', 'answers');
  divPlay.appendChild(divAnswers);
  var btnFalse = document.createElement('button');
  btnFalse.setAttribute('class', 'btn-asw');
  btnFalse.setAttribute('id', 'false');
  btnFalse.innerHTML = 'True';
  divAnswers.appendChild(btnFalse);
  var btnTrue = document.createElement('button');
  btnTrue.setAttribute('class', 'btn-asw');
  btnTrue.setAttribute('id', 'true');
  btnTrue.innerHTML = 'False';
  divAnswers.appendChild(btnTrue);
  createListeners();

}

//Start game button
var btnStart = document.getElementById('start-btn');
btnStart.addEventListener('click', createGame);



//Answer actions
function correctAnswer() {

  var mainSection = document.getElementById('game'); //Repeated
  var qSection = document.getElementById('play'); // Repeated

  mainSection.removeChild(qSection);
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'succeed');
  mainSection.appendChild(newDiv);
  var otherDiv = document.createElement('div');
  otherDiv.setAttribute('id', 'txt-succeed');
  mainSection.appendChild(otherDiv);
  var newTitle = document.createElement('h2');
  otherDiv.appendChild(newTitle);
  newTitle.innerHTML = 'AWWWESOME!!!';
  nextQuestion();
}



function wrongAnswer() {

  var mainSection = document.getElementById('game'); //Repeated
  var qSection = document.getElementById('play'); //Repeated

  mainSection.removeChild(qSection);
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'failed');
  mainSection.appendChild(newDiv);
  var otherDiv = document.createElement('div');
  otherDiv.setAttribute('id', 'txt-failed');
  mainSection.appendChild(otherDiv);
  var newTitle = document.createElement('h2');
  otherDiv.appendChild(newTitle);
  newTitle.innerHTML = 'WRUUUNG!!!';
}

//Coming back to the question

function deleteCurrrentPage() {
  var title = document.getElementById('title'); //Repeated
  var mainSection = document.getElementById('game'); //Repeated

  body.removeChild(title);
  body.removeChild(game);
}

var Question;


//Temporal testing
function createGame2() {
  var header = document.createElement('header');
  header.setAttribute('id', 'title');
  body.appendChild(header);
  var title = document.createElement('h1');
  title.innerHTML = 'True or False';
  header.appendChild(title);
  var mainSection = document.createElement('section');
  mainSection.setAttribute('id', 'game');
  body.appendChild(mainSection);
  var divPlay = document.createElement('div');
  divPlay.setAttribute('id', 'play');
  mainSection.appendChild(divPlay);
  var divQuestion = document.createElement('div');
  divQuestion.setAttribute('id', 'question');
  divPlay.appendChild(divQuestion);
  var question = document.createElement('h2');
  question.innerHTML = 'Is Laravel a framework for JavaScript?';
  divQuestion.appendChild(question);
  var divAnswers = document.createElement('div');
  divAnswers.setAttribute('class', 'answers');
  divPlay.appendChild(divAnswers);
  var btnFalse = document.createElement('button');
  btnFalse.setAttribute('class', 'btn-asw');
  btnFalse.setAttribute('id', 'false');
  btnFalse.innerHTML = 'True';
  divAnswers.appendChild(btnFalse);
  var btnTrue = document.createElement('button');
  btnTrue.setAttribute('class', 'btn-asw');
  btnTrue.setAttribute('id', 'true');
  btnTrue.innerHTML = 'False';
  divAnswers.appendChild(btnTrue);
  createListeners();
}


function nextQuestion() {
  Question = setTimeout(function() {
    deleteCurrrentPage();
    createGame2();
  }, 3000);
}
