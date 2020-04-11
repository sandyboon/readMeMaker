const questions = [];

function Question(questionStr, answerVarName, answerType) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
  questions.push(this);
}

const question1 = new Question(
  'Please provide your github username',
  'userName',
  'input'
);

const question2 = new Question(
  'Please provide a suitable name for your project',
  'projectName',
  'input'
);

const question3 = new Question(
  'Please provide a description for your project',
  'projectDescription',
  'input'
);

module.exports = questions;
