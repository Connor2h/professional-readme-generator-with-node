// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``
  }
  return 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``
  }
  return `${license.join(', ')}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data[0].projectTitle);

  return `# ${data[0].projectTitle}

## Description 

${data[0].description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

${data[0].installation}

## Usage

${data[0].usage}

## Credits

${data[0].credits}

## License

${renderLicenseSection(data[0].license)}

## Badges



## Features



## Contributing

If you would like to contribute, then checkout the link below
https://www.contributor-covenant.org/

## Questions

Github Profile: https://github.com/${data[0].github}
If you have additional questions then you can email me here: <${data[0].email}>

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

module.exports = generateMarkdown;
