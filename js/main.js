'use strict';

function main() {
  var container = document.getElementById('game-container');
  var game = new Game(container, questions);
  game.buildStart();
}

window.addEventListener('DOMContentLoaded', main);
