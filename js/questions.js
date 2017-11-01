'use strict';

var questions = [
  {
    type: 'MultipleChoice',
    title:'Select the correct ones',
    level: 2,
    points: 6,
    question: 'Which of these are frameworks for JavaScript?',
    options: ['Vue', 'Zend', 'Ember', 'Django', 'Meteor'],
    solution: ['Vue', 'Ember', 'Meteor']
  },
  {
    type: 'TrueFalse',
    title:'True or False',
    level: 1,
    points: 4,
    question: 'Is Laravel a framework for JavaScript?',
    options: ['True', 'False'],
    solution: 'False'
  },
  // {
  //   type: 'Select the correct ones',
  //   level: 2,
  //   points: 6,
  //   question: 'How do you declare a function in Javascript?',
  //   options: ['function foo()', 'function = foo()', 'fucntion: foo()'],
  //   solution: ['function foo()']
  // }
];
