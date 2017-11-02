'use strict';

function TrueOrFalse (data, questionIndex, parentElement) {
  var self = this;

    self.data = data;
    self.parentElement = parentElement;
    self.currentQuestionIndex = questionIndex;

    self.title = null;
    self.question = null;
    self.answers = null;

    self.userAnswer = null;

    self.headerContainer = null;

    self.renderHeader();
    self.renderTitle();
    self.renderQuestion();
    self.renderAnswer();
}

TrueOrFalse.prototype.bindAnswer = function(callback) {
  var self = this;
  self.callback = callback;
};

TrueOrFalse.prototype.renderHeader = function () {
  var self = this;

  self.headerContainer = document.createElement('header');
  self.headerContainer.id = 'header-container';
  self.parentElement.appendChild(self.headerContainer)

  var currentQuestionDiv = document.createElement('div');
  currentQuestionDiv.id = 'current-question';
  self.headerContainer.appendChild(currentQuestionDiv);
  var currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.innerText = `${self.currentQuestionIndex + 1} / 3`;
  currentQuestionDiv.appendChild(currentQuestionNumber);

  var pointsDiv = document.createElement('div');
  pointsDiv.id = 'points-container';
  self.headerContainer.appendChild(pointsDiv);
  var winningPoints = document.createElement('p');
  winningPoints.innerText = `Winnings: ${self.data.points}`;
  pointsDiv.appendChild(winningPoints);
  var lossesPoints = document.createElement('div');
  lossesPoints.innerText += `Losses: ${self.data.points + 2}`;
  pointsDiv.appendChild(lossesPoints);
}



TrueOrFalse.prototype.renderTitle = function () {
  var self = this;

  self.title = document.createElement('div');
  self.title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = self.data.title;
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
  self.answers.classList.add('answers');
  self.parentElement.appendChild(self.answers);

  for (var i = 0; i < self.data.options.length; i++) {

    var button = document.createElement('button');
    button.innerText = self.data.options[i];
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
    return self.userAnswer === self.data.solution;
  }

  self.callback(getResult());
  self.destroy();
};



TrueOrFalse.prototype.destroy = function () {
  var self = this;

  self.parentElement.removeChild(self.headerContainer);
  self.parentElement.removeChild(self.title);
  self.parentElement.removeChild(self.question);
  self.parentElement.removeChild(self.answers);
};
