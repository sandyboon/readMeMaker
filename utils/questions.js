function Question(questionStr, answerVarName, answerType) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
}

const question1 = new Question(
  'Please provide your github username',
  'userName',
  'input'
);

const questions = [question1];

module.exports = questions;

// type: 'input',
//       message: 'What is your user name?',
//       name: 'username'