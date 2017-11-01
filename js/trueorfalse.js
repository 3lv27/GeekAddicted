'use strict';

function TrueOrFalse (data, parentElement) {
  var self = this;

    self.data = data;
    self.parentElement = parentElement;

    self.title = null;
    self.question = null;
    self.answers = null;

    self.userAnswer = null;

    self.renderTitle();
    self.renderQuestion();
    self.renderAnswer();
}

TrueOrFalse.prototype.bindAnswer = function(callback) {
  var self = this;
  self.callback = callback;
};



TrueOrFalse.prototype.renderTitle = function () {
  var self = this;

  self.title = document.createElement('header');
  self.title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = 'True or False';
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

  self.parentElement.removeChild(self.title);
  self.parentElement.removeChild(self.question);
  self.parentElement.removeChild(self.answers);
};
