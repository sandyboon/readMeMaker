function generateMarkdown(data) {
  validateData(data);
  return `
# ${data.projectName}

## Description 
${data.projectDescription}

## Installation
${getInstallationSteps(data.installation)}


## Usage 
${data.usage}

${getCredits(data)}



`;
}

function getCredits(data) {
  return data.credits.trim().length !== 0
    ? `## Credits
${data.credits}`
    : '';
}

function validateData(data) {
  if (data.projectName.trim().length === 0) {
    throw new Error('project name can not be empty');
  } else if (data.projectDescription.trim().length === 0) {
    throw new Error('project desscription can not be empty');
  } else if (data.installation.trim().length === 0) {
    throw new Error('project installation steps can not be empty');
  }
}

function getInstallationSteps(installationSteps) {
  let steps = installationSteps.split(',');
  console.log(steps);
  let parsedSteps = steps.map((step, index) => {
    console.log(step);
    return 'Step ' + index + ' : ' + step + '\n';
  });
  console.log(parsedSteps.join());
  return parsedSteps.join('<br />');
}

module.exports = generateMarkdown;
