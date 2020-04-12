'use strict';
const questions = [];

function Question(questionStr, answerVarName, answerType) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
  questions.push(this);
}

const userNameQuestion = new Question(
  'Please provide your github username',
  'userName',
  'input'
);

const projectNameQuestion = new Question(
  'Please provide a suitable name for your project',
  'projectName',
  'input'
);

const projectDescQuestion = new Question(
  'Please provide a description for your project',
  'projectDescription',
  'input'
);

const installationStepsQuestion = new Question(
  'Please provide steps required to install your project',
  'installation',
  'input'
);

const usageQuestion = new Question(
  'Please provide instructions and examples for use of your project',
  'usage',
  'input'
);

const creditsQuestion = new Question(
  'List your collaborators, if any, with links to their GitHub profiles',
  'credits',
  'input'
);

module.exports = questions;
