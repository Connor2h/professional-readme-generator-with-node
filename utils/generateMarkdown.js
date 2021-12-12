// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``
  }else if(license[0] === 'MIT License' && license[1] === 'GNU GPLv3' && license[2] === 'Apache License'){
    return `${license.join(' || ')}`
  }
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

## Table of Contents (Optional)

* Installation
* Usage
* Credits
* License
* Badges
* Features
* Contributing
* Tests

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



## Tests



`;
}

module.exports = generateMarkdown;
