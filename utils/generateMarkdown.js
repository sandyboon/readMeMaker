/**
 * Generates the read me file content based on user responses
 * @param {*} data
 */
function generateMarkdown(data) {
  return `# ${data.projectName}
${'![licenseInformation](' + getBadgeUrl(data.licenseType) + ')'}
## Table of Contents
${getTableOfContents(data)}

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

## Tests
${data.tests}

## Questions
### Email : hidden
![repoOwnerImage](${data.userImgUrl})
`;
}

function getTableOfContents(data) {
  let tableOfContents = '';
  tableOfContents = tableOfContents
    .concat('* [Description](#Description)\n')
    .concat('* [Installation](#Installation)\n')
    .concat('* [Usage](#Usage)\n');
  if (data.credits.trim().length !== 0) {
    tableOfContents = tableOfContents.concat('* [Credits](#Credits)\n');
  }
  tableOfContents = tableOfContents.concat('* [License](#License)\n');
  if (data.contributing.trim().length !== 0) {
    tableOfContents = tableOfContents.concat(
      '* [Contributing](#Contributing)\n'
    );
  }
  if (data.tests.trim().length !== 0) {
    tableOfContents = tableOfContents.concat('* [Tests](#Tests)\n');
  }
  tableOfContents = tableOfContents.concat('* [Questions](#Questions)\n');
  return tableOfContents;
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
    ? `\n## Credits
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
