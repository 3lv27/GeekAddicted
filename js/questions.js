'use strict';

var questions = [
  {
    type: 'MultipleChoice',
    title:'Select the correct ones',
    level: 3,
    points: 8,
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
  {
    type: 'TrueFalse',
    title: 'Select the correct answer',
    level: 2,
    points: 6,
    question: 'How do you declare a function in Javascript?',
    options: ['function foo()', 'function = foo()', 'function: foo()'],
    solution: 'function foo()'
  },
  {
    type: 'TrueFalse',
    title:'True or False',
    level: 1,
    points: 6,
    question: 'Is JS Object Oriented?',
    options: ['True', 'False'],
    solution: 'True'
  },
  {
  type: 'MultipleChoice',
  title:'Select the correct ones',
  level: 3,
  points: 8,
  question: 'Which of these type of values exists in JS?',
  options: ['Boolean', 'Number', 'String', 'Double'],
  solution: ['Boolean', 'Number', 'String']
}
];
