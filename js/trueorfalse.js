'use strict';

function TrueOrFalse(data, headerElement, scoreElement, parentElement) {
  var self = this;

    self.data = data;
    self.parentElement = parentElement;
    self.headerContainer = headerElement;
    self.scoreDiv = scoreElement;

    self.title = null;
    self.question = null;
    self.answers = null;

    self.userAnswer = null;


    self.initQuestion();
}


TrueOrFalse.prototype.initQuestion = function() {
  var self = this;

  self.renderTitle();
  self.renderQuestion();
  self.renderAnswer();
};

TrueOrFalse.prototype.bindAnswer = function(callback) {
  var self = this;
  self.callback = callback;
};


// TrueOrFalse.prototype.renderScore = function () {
//   var self = this;
//
//   self.scoreDiv = document.createElement('div');
//   self.scoreDiv.id = 'score';
//   self.parentElement.appendChild(self.scoreDiv);
//
//   var wrongAnswers = document.createElement('div');
//   wrongAnswers.id = 'wrong-answers';
//   self.scoreDiv.appendChild(wrongAnswers);
//   var numWrongAnswers = document.createElement('p');
//   numWrongAnswers.innerText = 'X';
//   wrongAnswers.appendChild(numWrongAnswers);
//
//   var totalScoreDiv = document.createElement('div');
//   totalScoreDiv.id = 'total-score';
//   totalScoreDiv.innerText = `YOUR SCORE: ${self.totalScore}`;
//   self.scoreDiv.appendChild(totalScoreDiv);
//
//
//   var correctAnswers = document.createElement('div');
//   correctAnswers.id = 'correct-answers';
//   self.scoreDiv.appendChild(correctAnswers);
//   var numWrongAnswers = document.createElement('p');
//   numWrongAnswers.innerText = `C: ${self.rightAnswers}`;
//   correctAnswers.appendChild(numWrongAnswers);
//
//
// }

TrueOrFalse.prototype.renderTitle = function () {
  var self = this;

  self.title = document.createElement('div');
  self.title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = `- ${self.data.title} -`;
  self.title.appendChild(titleText);
  self.parentElement.appendChild(self.title);
};

TrueOrFalse.prototype.renderQuestion = function () {
  var self = this;

  self.question = document.createElement('div');
  self.question.id = 'question';
  var questionText = document.createElement('h3');
  questionText.innerText = self.data.question;
  self.question.appendChild(questionText);

  self.parentElement.appendChild(self.question);
};

TrueOrFalse.prototype.renderAnswer = function () {
  var self = this;

  self.answers = document.createElement('div');
  self.answers.classList.add('answers-true');
  self.parentElement.appendChild(self.answers);

  for (var i = 0; i < self.data.options.length; i++) {

    var button = document.createElement('button');
    button.innerText = self.data.options[i];
    button.classList.add('true-btn');
    self.answers.appendChild(button);

    button.addEventListener('click', function(event) {
      self.handleAnswerClick(event);
    });
  }
};


TrueOrFalse.prototype.handleAnswerClick = function (event) {
  var self = this;

  var button = event.currentTarget;
  button.classList.toggle('active');
  self.userAnswer = event.currentTarget.innerText;



  function getResult () {
    if (self.userAnswer === self.data.solution) {
      self.totalScore += self.data.points;
      self.rightAnswers += 1;

      return true;
    } else {
      self.totalScore -= self.data.points + 2;
      self.wrongAnswers += 1;

      return false;
    }
  }

  self.callback(getResult());
  self.destroy();
};



TrueOrFalse.prototype.destroy = function () {
  var self = this;

  self.parentElement.removeChild(self.scoreDiv);
  self.parentElement.removeChild(self.headerContainer);
  self.parentElement.removeChild(self.title);
  self.parentElement.removeChild(self.question);
  self.parentElement.removeChild(self.answers);
};
