/**
 * Generates the read me file content based on user responses
 * @param {*} data
 */
function generateMarkdown(data) {
  return `# ${data.projectName}

## Badges
${'![licenseInformation](' + getBadgeUrl(data.licenseType) + ')'}

## Description 
${data.projectDescription}

## Installation
${getInstallationSteps(data.installation)}

## Usage 
${data.usage}${getCredits(data)}

## License
${'Licensed under the ' + getLicenseInformation(data.licenseType)}

## Contributing
${data.contributing}

`;
}

function getBadgeUrl(licenseType) {
  let badgeURL = '';
  switch (licenseType) {
    case 'MIT':
      badgeURL = 'https://img.shields.io/apm/l/vim-mode';
      break;
    case 'EPL':
      badgeURL = 'https://img.shields.io/eclipse-marketplace/l/notepad4e';
      break;
    case 'Apache':
      badgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    default:
      badgeURL = 'https://img.shields.io/apm/l/vim-mode';
      break;
  }
  return badgeURL;
}

function getLicenseInformation(licenseType) {
  let licensInformation = '';
  switch (licenseType) {
    case 'MIT':
      licensInformation = 'MIT license.';
      break;
    case 'EPL':
      licensInformation = 'Eclipse Public License v2.0';
      break;
    case 'Apache':
      licensInformation = 'Apache License 2.0';
      break;
    default:
      licensInformation = 'MIT license.';
      break;
  }
  return licensInformation;
}

function getCredits(data) {
  return data.credits.trim().length !== 0
    ? `\n# Credits
${data.credits}`
    : '';
}

function getInstallationSteps(installationSteps) {
  let steps = installationSteps.split(',');
  let parsedSteps = steps.map((step, index, steps) => {
    let isLastStep = index === steps.length;
    step = '* ' + step.trim();
    if (!isLastStep) {
      step = step.concat('\n');
    }
    return step;
  });
  return parsedSteps.join('');
}

module.exports = generateMarkdown;
