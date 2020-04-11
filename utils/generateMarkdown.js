function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description 
${data.projectDescription}

## Installation
${data.installation}



`;
}

module.exports = generateMarkdown;
