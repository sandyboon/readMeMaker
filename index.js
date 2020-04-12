const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const githubApi = require('./utils/api');
const markDownGenerator = require('./utils/generateMarkdown');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);

/**
 * Main function where application starts
 */
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    //validate before making call to github api
    validateData(answers);
    //get user data from github
    const githubUser = await githubApi.getUser(answers.userName);
    //formate and write to read me file
    await writeToFile(
      answers.projectName.concat('.md'),
      markDownGenerator(concatenateResponses(githubUser, answers))
    );
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {String} fileName
 * @param {UserResponseObj} data
 */
function writeToFile(fileName, data) {
  //here we write the readme file to disk
  fileName = './output/'.concat(fileName);
  return writeFilePromise(fileName, data);
}

/**
 *
 * @param {*} param0 gitHub user object
 * @param {*} userResponses
 */
function concatenateResponses({ avatar_url }, userResponses) {
  userResponses.userImgUrl = avatar_url;
  return userResponses;
}

/**
 * Validates user's responses
 * @param {User Answers} data
 */
function validateData(data) {
  if (data.projectName.trim().length === 0) {
    throw new Error('project name can not be empty');
  }
  if (data.projectDescription.trim().length === 0) {
    throw new Error('project desscription can not be empty');
  }
  if (data.installation.trim().length === 0) {
    throw new Error('project installation steps can not be empty');
  }
  if (
    data.installation.trim() === 'Comma seperated steps to install your project'
  ) {
    throw new Error('project installation steps can not be empty');
  }
  if (
    data.credits.trim() ===
    'Optional field. Press Enter to skip to next question'
  ) {
    data.credits = '';
  }
  console.log(data.contributing.trim());
  if (
    data.contributing.trim() ===
    'Optional field. Press Enter to skip to next question.'
  ) {
    data.contributing =
      'Contribution to this project is not permitted at this moment.';
  }
  console.log(data.contributing);
}

init();
