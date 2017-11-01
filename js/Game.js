'use strict';

function Game(parentElement, questions) {
  this.parentElement = parentElement;
  this.questions = questions;

  this.currentQuestionIndex = null;

  // @todo increment score
  // @todo timer
}

Game.prototype.buildStart = function() {
  var self = this;

  var startDiv = document.createElement('div');
  startDiv.id = 'start';

  var button = document.createElement('button');
  button.id = 'start-btn';
  button.classList.add('btn-asw');
  button.innerText = 'START';

  button.addEventListener('click', function () {
    self.parentElement.removeChild(startDiv);
    self.prepareGame();
    self.nextQuestion();
  });

  startDiv.appendChild(button);

  self.parentElement.appendChild(startDiv);
};


Game.prototype.prepareGame = function () {
  var self = this;

  //shuffle the questions

  function shuffle(array) {
    var currentIndex = self.questions.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

  self.questions = shuffle(self.questions)

  //end shuffle

  console.log('prepare the game');
};

Game.prototype.nextQuestion = function () {
  var self = this;
  console.log('next question');

  if (self.currentQuestionIndex === null) {
    self.currentQuestionIndex = 0;
  } else {
    self.currentQuestionIndex++;
  }

  // @todo no more questions? > gameOver()

  var data = self.questions[self.currentQuestionIndex];

  if (self.currentQuestionIndex >= self.questions.length) {
    return self.endGame(); //@todo
  } else {

  // switch case to the type of question

    switch(data.type) {
      case 'MultipleChoice':
        var question = new MultipleChoice(data, self.parentElement);
        break;
      case 'TrueFalse':
        var question = new TrueOrFalse(data, self.parentElement);
        break;
    }
  }

  //

  var theCallback = function(correct) {

    console.log("correct?", correct);

    if (correct !== true) {
      return self.wrongAnswer();
    } else {
      return self.correctAnswer();
    }
  };

  question.bindAnswer(theCallback);
};


Game.prototype.correctAnswer = function () {
  var self = this;

  var succeed = document.createElement('div');
  succeed.id = 'succeed';
  succeed.innerText = 'AWWWESOME!!!';
  self.parentElement.appendChild(succeed);

  // @todo increment score +2 (or self.questions[self.currentQuestion].points)

  // setTimeout and call nextQuestion
  var next = setTimeout(function() {
      self.parentElement.removeChild(succeed)
      self.nextQuestion();
  }, 3000);

};


Game.prototype.wrongAnswer = function () {
  var self = this;

  var failed = document.createElement('div');
  failed.id = 'failed';
  failed.innerText = 'WWWRUUNG!!!';
  self.parentElement.appendChild(failed);


    // @todo decrement score -5

  //setTimeout and call nextQuestion
  var next = setTimeout(function() {
      self.parentElement.removeChild(failed)
      self.nextQuestion();
  }, 3000);
};


Game.prototype.endGame = function () {
  var self = this; 

  var endScreen = document.createElement('div');
  endScreen.id = 'endScreen';
  endScreen.innerText = 'GAME OVER'
  self.parentElement.appendChild(endScreen);
}
