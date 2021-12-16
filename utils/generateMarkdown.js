// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license[0] === 'none'){
    return ``
  }
  if(license[0] === 'MIT License'){
    return `<img src="https://img.shields.io/github/license/connor2h/professional-readme-generator-with-node?color=blue&label=MIT">`
  }
  if(license[0] === "GNU GPLv3"){
    return `<img src="https://img.shields.io/github/license/connor2h/professional-readme-generator-with-node?color=blue&label=GNU%20GPLv3">`
  }
  if(license[0] === "Apache License"){
    return `<img src="https://img.shields.io/github/license/connor2h/professional-readme-generator-with-node?color=blue&label=Apache%20License">`
  }
  if(license[0] === 'none'){
    return ``
  }
  //return `<img src="">`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``
  }
  if(license[0] === 'none'){
    return ``
  }
  if(license[0] === 'MIT License'){
    return `Mit License: <https://choosealicense.com/licenses/mit/>`
  }
  if(license[0] === "GNU GPLv3"){
    return `GNU GPLv3 License: <https://choosealicense.com/licenses/gpl-3.0/>`
  }
  if(license[0] === "Apache License"){
    return `Apache License: <https://choosealicense.com/licenses/apache-2.0/>`
  }
  if(license[0] === 'none'){
    return ``
  }
  //return `${license.join(', ')}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``
  }
  if(license[0] === 'none'){
    return ``
  }
  return `
## License

${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data[0].projectTitle);

  return `

${renderLicenseBadge(data[0].license)}

# ${data[0].projectTitle}


## Description 

${data[0].description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Questions](#questions)
* [Tests](#tests)


## Installation

Run "${data[0].installation}" to install dependencies


## Usage

${data[0].usage}


## Credits

${data[0].credits}


${renderLicenseSection(data[0].license)}


## Badges

${renderLicenseBadge(data[0].license)}


## Contributing

Contributers: ${data[0].credits}


## Questions

Github Profile: https://github.com/${data[0].github}\n
If you have additional questions then you can email me here: <${data[0].email}>


## Tests

Run "${data[0].tests}" to run tests

`;
}

module.exports = generateMarkdown;
