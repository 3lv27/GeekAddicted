'use strict';

function MultipleChoice(data, parentElement) {
  var self = this;

  self.data = data;
  self.parentElement = parentElement;

  self.title;
  self.answer;

  self.userAnswer = [];

  self.renderTitle();
  self.renderQuestion();
  self.renderAnswer();
  self.renderSubmit();
}

MultipleChoice.prototype.bindAnswer = function(callback) {
  var self = this;
  self.callback = callback;
};

MultipleChoice.prototype.renderTitle = function() {
  var self = this;

  self.title = document.createElement('header');
  self.title.id = 'title';

  var titleText = document.createElement('h2');
  titleText.innerText = 'Select the correct ones';
  self.title.appendChild(titleText);
  self.parentElement.appendChild(self.title);
};

MultipleChoice.prototype.renderQuestion = function() {
  var self = this;

  var question = document.createElement('div');
  question.id = 'question';
  var questionText = document.createElement('h3');
  questionText.innerText = self.data.question;
  question.appendChild(questionText);

  self.parentElement.appendChild(question);
};

MultipleChoice.prototype.renderAnswer = function() {
  var self = this;

  self.answers = document.createElement('div');
  self.answers.classList.add('answers');
  self.parentElement.appendChild(self.answers);

  for (var index = 0; index < self.data.options.length; index++) {

    var button = document.createElement('button');
    //button.setAttribute('type', 'button');
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

  var submit = document.createElement('button');
  submit.id = 'submit-btn';
  submit.innerText = 'submit';
  self.parentElement.appendChild(submit);

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
     return self.correctAnswer();
   }

  submit.addEventListener('click', function() {
    console.log(self.userAnswer);
    self.callback(getResult());
  });
};

MultipleChoice.prototype.correctAnswer = function () {
  var self = this;
  var answers = document.getElementsByClassName('answers')
  self.parentElement.removeChild(title);
  self.parentElement.removeChild(question);
  self.parentElement.removeChild(answers);

}
