'use strict';
const questions = [];

function Question(questionStr, answerVarName, answerType, choices, defaultVal) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
  if (choices !== undefined && Array.isArray(choices)) {
    this.choices = choices;
  }
  if (defaultVal !== undefined && defaultVal !== null) {
    this.default = defaultVal;
  }
  questions.push(this);
}

const userNameQuestion = new Question(
  'Please provide your github username',
  'userName',
  'input',
  null,
  null
);

const projectNameQuestion = new Question(
  'Please provide a suitable name for your project',
  'projectName',
  'input',
  null,
  'Project Title'
);

const projectDescQuestion = new Question(
  'Please provide a description for your project',
  'projectDescription',
  'input',
  null,
  null
);

const installationStepsQuestion = new Question(
  'Please provide steps required to install your project',
  'installation',
  'input',
  null,
  'Comma seperated steps to install your project'
);

const usageQuestion = new Question(
  'Please provide instructions and examples for use of your project',
  'usage',
  'input',
  null,
  null
);

const creditsQuestion = new Question(
  'Please list your collaborators, if any, with links to their GitHub profiles',
  'credits',
  'input',
  null,
  'Optional field. Press Enter to skip to next question'
);

const licenseQuestion = new Question(
  'Please choose the type of license you want to apply to your project',
  'licenseType',
  'list',
  ['MIT', 'EPL', 'Apache'],
  'MIT license is the defult value'
);

const contributingQuestion = new Question(
  'Please describe how others may contribute to your project.',
  'contributing',
  'input',
  null,
  'Optional field. Press Enter to skip to next question.'
);

module.exports = questions;
