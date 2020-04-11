const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const githubApi = require('./utils/api');

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    //get user data from github first
    const githubUser = await githubApi.getUser(answers.userName);
    console.log(githubUser);
  } catch (error) {
    console.log(error);
  }
}

function writeToFile(fileName, data) {}

init();
