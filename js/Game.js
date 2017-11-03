'use strict';

function Game(parentElement, questions) {
  var self = this;

  self.parentElement = parentElement;
  self.questions = questions;

  self.currentQuestionIndex = null;

  self.reset = null;
  self.timerBar = null;
  self.timeOutInterval = null;

  self.headerContainer = null;
  self.scoreDiv = null;

  self.totalScore = 0;
  self.rightAnswers = 0;
  self.wrongAnswers = 0;

}



Game.prototype.buildStart = function() {
  var self = this;

  var gameName = document.createElement('header');
  gameName.id = 'gamename';
  self.parentElement.appendChild(gameName);

  var gameNameTitle = document.createElement('h1');
  gameNameTitle.innerText = 'GeekAddicted Quizz';
  gameName.appendChild(gameNameTitle);

  var startDiv = document.createElement('div');
  startDiv.id = 'start';

  var button = document.createElement('button');
  button.id = 'start-btn';
  button.classList.add('btn-start');
  button.innerText = 'START';

  button.addEventListener('click', function () {
    self.parentElement.removeChild(gameName);
    self.parentElement.removeChild(startDiv);
    //self.headerGame();

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


Game.prototype.renderHeader = function () {
  var self = this;

  self.headerContainer = document.createElement('div');
  self.headerContainer.id = 'header-container';
  self.parentElement.appendChild(self.headerContainer);

  var currentWinningPoints = document.createElement('div');
  currentWinningPoints.id = 'winning-points';
  self.headerContainer.appendChild(currentWinningPoints);
  var winPoints = document.createElement('p');
  winPoints.innerText = `+ ${self.questions[self.currentQuestionIndex].points} geeks`;
  currentWinningPoints.appendChild(winPoints);
  var winnings = document.createElement('p');
  winnings.innerText = 'Winnings';
  currentWinningPoints.appendChild(winnings);

  var totalScoreDiv = document.createElement('div');
  totalScoreDiv.id = 'total-score';
  self.headerContainer.appendChild(totalScoreDiv);
  var yourScore = document.createElement('p');
  yourScore.innerText = 'TOTAL SCORE';
  totalScoreDiv.appendChild(yourScore);
  var yourGeeks = document.createElement('p');
  yourGeeks.innerText = `${self.totalScore} GEEKS`;
  totalScoreDiv.appendChild(yourGeeks);

  var currentLossesPoints = document.createElement('div');
  currentLossesPoints.id = 'losses-points';
  self.headerContainer.appendChild(currentLossesPoints);
  var loosePoints = document.createElement('p');
  loosePoints.innerText = `- ${self.questions[self.currentQuestionIndex].points + 1} geeks`;
  currentLossesPoints.appendChild(loosePoints);
  var losses = document.createElement('p');
  losses.innerText = 'Lossess';
  currentLossesPoints.appendChild(losses);



//   var currentQuestionDiv = document.createElement('div');
//   currentQuestionDiv.id = 'current-question';
//   self.headerContainer.appendChild(currentQuestionDiv);
//   var currentQuestionNumber = document.createElement('p');
//   currentQuestionNumber.innerText = `${self.currentQuestionIndex + 1} / ${self.questions.length}`;
//   currentQuestionDiv.appendChild(currentQuestionNumber);
//
//   var pointsDiv = document.createElement('div');
//   pointsDiv.id = 'points-container';
//   self.headerContainer.appendChild(pointsDiv);
//   var winningPoints = document.createElement('p');
//   winningPoints.innerText = `Winnings: ${self.questions[self.currentQuestionIndex].points} geeks`;
//   pointsDiv.appendChild(winningPoints);
//   var lossesPoints = document.createElement('div');
//   lossesPoints.innerText += `Losses: ${self.questions[self.currentQuestionIndex].points + 2} geeks`;
//   pointsDiv.appendChild(lossesPoints);
 }


Game.prototype.renderScore = function () {
  var self = this;

  self.scoreDiv = document.createElement('div');
  self.scoreDiv.id = 'score';
  self.parentElement.appendChild(self.scoreDiv);

  var correctAnswers = document.createElement('div');
  correctAnswers.id = 'correct-answers';
  self.scoreDiv.appendChild(correctAnswers);
  var imgCorrect = document.createElement('img');
  imgCorrect.setAttribute('src', './img/correct.png');
  correctAnswers.appendChild(imgCorrect);
  var numWrongAnswers = document.createElement('p');
  numWrongAnswers.innerText = ` : ${self.rightAnswers}`;
  correctAnswers.appendChild(numWrongAnswers);


  var currentQuestionDiv = document.createElement('div');
  currentQuestionDiv.id = 'current-question';
  self.scoreDiv.appendChild(currentQuestionDiv);
  var currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.innerText = `${self.currentQuestionIndex + 1} / ${self.questions.length}`;
  currentQuestionDiv.appendChild(currentQuestionNumber);

  var wrongAnswers = document.createElement('div');
  wrongAnswers.id = 'wrong-answers';
  self.scoreDiv.appendChild(wrongAnswers);
  var imgWrong = document.createElement('img');
  imgWrong.setAttribute('src', './img/wrong.png');
  wrongAnswers.appendChild(imgWrong);
  var numWrongAnswers = document.createElement('p');
  numWrongAnswers.innerText = ` : ${self.wrongAnswers}`;
  wrongAnswers.appendChild(numWrongAnswers);




  // var wrongAnswers = document.createElement('div');
  // wrongAnswers.id = 'wrong-answers';
  // self.scoreDiv.appendChild(wrongAnswers);
  // var numWrongAnswers = document.createElement('p');
  // numWrongAnswers.innerText = `X: ${self.wrongAnswers}`;
  // wrongAnswers.appendChild(numWrongAnswers);
  //
  // var totalScoreDiv = document.createElement('div');
  // totalScoreDiv.id = 'total-score';
  // self.scoreDiv.appendChild(totalScoreDiv);
  // var yourScore = document.createElement('p');
  // yourScore.innerText = 'YOUR SCORE';
  // totalScoreDiv.appendChild(yourScore);
  // var yourGeeks = document.createElement('p');
  // yourGeeks.innerText = `${self.totalScore} GEEKS`;
  // totalScoreDiv.appendChild(yourGeeks);
  //
  //
  //
  // var correctAnswers = document.createElement('div');
  // correctAnswers.id = 'correct-answers';
  // self.scoreDiv.appendChild(correctAnswers);
  // var imgCorrect = document.createElement('img');
  // imgCorrect.setAttribute('src', './img/correct.png');
  // correctAnswers.appendChild(imgCorrect);
  // var numWrongAnswers = document.createElement('p');
  // numWrongAnswers.innerText = self.rightAnswers;
  // correctAnswers.appendChild(numWrongAnswers);


}



Game.prototype.nextQuestion = function () {
  var self = this;
  console.log('next question');

  if (self.currentQuestionIndex === null) {
    self.currentQuestionIndex = 0;
  } else {
    self.currentQuestionIndex++;
  }

  // no more questions? > gameOver()

  var data = self.questions[self.currentQuestionIndex];

  if (self.currentQuestionIndex >= self.questions.length) {
    return self.endGame();
  } else {

  // switch case to the type of question

    var question;
    switch(data.type) {
      case 'MultipleChoice':
        self.renderHeader();
        self.renderScore();
        question = new MultipleChoice(data, self.headerContainer, self.scoreDiv, self.parentElement);

        break;
      case 'TrueFalse':
        self.renderHeader();
        self.renderScore();
        question = new TrueOrFalse(data,self.headerContainer, self.scoreDiv, self.parentElement);

        break;
    }

    self.barTimer();
    setTimeout(function() {
        question.destroy();
        self.nextQuestion();
    }, 7000);
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


Game.prototype.barTimer = function () {
  var self = this;

  if (self.timeOutInterval) {
    clearInterval(self.timeOutInterval);
  }

  var question = document.getElementById('question')
  self.timerBar = document.createElement('div');
  self.timerBar.classList.add('timer-bar');
  question.appendChild(self.timerBar);

  var currentTurn = 1;
  var enmyActTimer = 100;
  var enmyActTimerElem;

  function subtractEnmyTimer() {
      enmyActTimer -= 1;
      document.getElementsByClassName("timer-bar")[0].style.width=enmyActTimer +'%';
  }
  function enmyTimerStart() {
    self.timeOutInterval = setInterval(subtractEnmyTimer, 70);
  }

  enmyTimerStart();
};

Game.prototype.correctAnswer = function () {
  var self = this;

  clearInterval(self.timeOutInterval);

  self.rightAnswers++;
  self.totalScore += self.questions[self.currentQuestionIndex].points;


  var succeed = document.createElement('div');
  succeed.id = 'succeed';
  self.parentElement.appendChild(succeed);

  var result = document.createElement('div');
  result.id = 'result';
  result.innerText = 'AWWWESOME!!!';
  self.parentElement.appendChild(result);


  // @todo increment score +2 (or self.questions[self.currentQuestion].points)

  // setTimeout and call nextQuestion
  var next = setTimeout(function() {
      self.parentElement.removeChild(succeed);
      self.parentElement.removeChild(result);
      self.nextQuestion();
  }, 3000);

};


Game.prototype.wrongAnswer = function () {
  var self = this;

  clearInterval(self.timeOutInterval);

  self.wrongAnswers++;
  self.totalScore -= self.questions[self.currentQuestionIndex].points + 2;

  var failed = document.createElement('div');
  failed.id = 'failed';
  self.parentElement.appendChild(failed);

  var result = document.createElement('div');
  result.id = 'result';
  result.innerText = 'WWWRUUNG!!!';
  self.parentElement.appendChild(result);


    // @todo decrement score -5

  //setTimeout and call nextQuestion
  var next = setTimeout(function() {
      self.parentElement.removeChild(failed)
      self.parentElement.removeChild(result);
      self.nextQuestion();
  }, 3000);
};


Game.prototype.endGame = function () {
  var self = this;

  clearInterval(self.timeOutInterval);

  // var headerContainer = document.getElementById('header-container');
  // self.parentElement.removeChild(headerContainer);

  var endScreen = document.createElement('div');
  endScreen.id = 'endScreen';
  endScreen.innerText = 'GAME OVER';
  self.parentElement.appendChild(endScreen);

  var resumScreen = document.createElement('div');
  resumScreen.id = 'resum-screen';
  self.parentElement.appendChild(resumScreen);

  var resumRight = document.createElement('div');
  resumRight.id = 'resum-right';
  resumRight.innerText = `Total Right Answers: ${self.rightAnswers}`;
  resumScreen.appendChild(resumRight);
  var resumWrong = document.createElement('div');
  resumWrong.id = 'resum-wrong';
  resumWrong.innerText = `Total Wrong Answers: ${self.wrongAnswers}`;
  resumScreen.appendChild(resumWrong);
  var finalScore = document.createElement('div');
  finalScore.id = 'resum-total';
  finalScore.innerText = `Total Geeks: ${self.totalScore}`;
  resumScreen.appendChild(finalScore);


  self.reset = document.createElement('button');
  self.reset.classList.add('btn-playagain');
  self.reset.innerText = 'PLAY AGAIN';
  self.parentElement.appendChild(self.reset);
  self.reset.addEventListener('click', function (){
    self.parentElement.removeChild(endScreen);
    self.parentElement.removeChild(resumScreen);
    self.parentElement.removeChild(self.reset);
    self.currentQuestionIndex = null;
    self.totalScore = 0;
    self.rightAnswers = 0;
    self.wrongAnswers = 0;
    self.prepareGame();
    self.nextQuestion();
  });


};
