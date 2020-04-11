const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const githubApi = require('./utils/api');
const markDownGenerator = require('./utils/generateMarkdown');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    //get user data from github first
    const githubUser = await githubApi.getUser(answers.userName);
    //write to read me file
    await writeToFile(
      answers.projectName,
      markDownGenerator(concatenateResponses(githubUser, answers))
    );
  } catch (error) {
    console.log(error);
  }
}

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

init();
