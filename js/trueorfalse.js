'use strict';

function TrueOrFalse (data, parentElement) {

    this.data = data;
    this.parentElement = parentElement;

    this.userAnswer = [];

    this.renderTitle();
    this.renderQuestion();




}



TrueOrFalse.prototype.renderTitle = function () {

  var title = document.createElement('header');
  title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = 'True or False';
  title.appendChild(titleText);
  this.parentElement.appendChild(title);
};

TrueOrFalse.prototype.renderQuestion = function () {

  var question = document.createElement('div');
  question.id = 'question';
  var questionText = document.createElement('h3');
  questionText.innerText = this.data.question;
  question.appendChild(questionText);

  this.parentElement.appendChild(question);
};

TrueOrFalse.prototype.renderAnswer = function () {

  var answers = document.createElement('div');
  answers.classList.add('answers');
  this.parentElement.appendChild(answers);

  for (var i = 0; i < this.data.options.length; i++) {

    var button = document.createElement('button');
    button.innerText = this.data.options[i];
    answers.appendChild(button);

    button.addEventListener('click', function(event) {
      this.handleAnswerClick(event);
    });
  }
};

TrueOrFalse.prototype
