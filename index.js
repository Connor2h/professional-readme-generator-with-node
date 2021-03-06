// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];

const promptProject = (questions) => {
    if (!questions) {
        questions = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your Project Title? (Required)',
            validate: name => {
                if(name){
                    return true
                }else{
                    console.log('Please enter Project Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a short description of your project. (Required)',
            validate: name => {
                if(name){
                    return true
                }else{
                    console.log('Please give a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please List your collaborators, if any, with links to their GitHub profiles.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have? (CHECK ONLY ONE)',
            choices: ['MIT License', 'GNU GPLv3', 'Apache License', 'none']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username',
            validate: github => {
                if(github){
                    return true
                }else{
                    console.log('Please enter your Github!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            validate: email => {
                if(email){
                    return true
                }else{
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]).then(projectData => {
        //console.log(projectData)
        
        questions.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return questions;
        }
    });
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeFile = (pageMark, project) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${project[0].projectTitle}.md`, pageMark, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {

    promptProject()
        .then(questions => {
            let pageMark = generateMarkdown(questions)
            return writeFile(pageMark,questions);
    })

}

init();