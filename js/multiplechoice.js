'use strict';

function MultipleChoice(data, questionIndex, parentElement) {
  var self = this;

  self.data = data;
  self.parentElement = parentElement;
  self.currentQuestionIndex = questionIndex;


  self.title = null;
  self.question = null;
  self.answers = null;
  self.submit = null;
  self.headerContainer = null;

  self.userAnswer = [];

  self.renderHeader();
  self.renderTitle();
  self.renderQuestion();
  self.renderAnswer();
  self.renderSubmit();
}

MultipleChoice.prototype.bindAnswer = function(callback) {
  var self = this;
  self.callback = callback;
};

MultipleChoice.prototype.renderHeader = function () {
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

MultipleChoice.prototype.renderTitle = function() {
  var self = this;

  self.title = document.createElement('div');
  self.title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = self.data.title;
  self.title.appendChild(titleText);
  self.parentElement.appendChild(self.title);
};

MultipleChoice.prototype.renderQuestion = function() {
  var self = this;

  self.question = document.createElement('div');
  self.question.id = 'question';
  var questionText = document.createElement('h3');
  questionText.innerText = self.data.question;
  self.question.appendChild(questionText);

  self.parentElement.appendChild(self.question);
};

MultipleChoice.prototype.renderAnswer = function() {
  var self = this;

  self.answers = document.createElement('div');
  self.answers.classList.add('answers');
  self.parentElement.appendChild(self.answers);


  for (var index = 0; index < self.data.options.length; index++) {

    var button = document.createElement('button');
    button.innerText = self.data.options[index];
    self.answers.appendChild(button);

    button.addEventListener('click', function(event) {
      self.handleAnswerClick(event);
    });
  }
};

MultipleChoice.prototype.handleAnswerClick = function(event) {
  var self = this;

  var button = event.currentTarget;
  button.classList.toggle('active');
  var buttonText = button.innerText;
  var indexOfAnswer = self.userAnswer.indexOf(buttonText);
  if (indexOfAnswer === -1) {
    self.userAnswer.push(buttonText);
  } else {
    self.userAnswer.splice(indexOfAnswer, 1);
  }
};

MultipleChoice.prototype.renderSubmit = function() {
  var self = this;

  self.submit = document.createElement('div');
  self.submit.id = 'submit';
  self.parentElement.appendChild(self.submit);
  var submitBtn = document.createElement('button');
  submitBtn.id = 'submit-btn';
  submitBtn.innerText = 'submit';
  self.submit.appendChild(submitBtn);

  function getResult () {

    if (self.userAnswer.length !== self.data.solution.length) {
      return false;
    }
    self.userAnswer.sort();
    self.data.solution.sort();

    for (var i = 0; i < self.userAnswer.length; i++){
       if( self.data.solution[i] !== self.userAnswer[i]){
          return false;
       }
     }
     return true;
   }

  submitBtn.addEventListener('click', function() {
    self.callback(getResult());
    self.destroy();
  });
};

MultipleChoice.prototype.destroy = function () {
  var self = this;

  self.parentElement.removeChild(self.headerContainer);
  self.parentElement.removeChild(self.title);
  self.parentElement.removeChild(self.question);
  self.parentElement.removeChild(self.answers);
  self.parentElement.removeChild(self.submit);
};
