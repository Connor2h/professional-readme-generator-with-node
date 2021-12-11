// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

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
        }
    ]).then(projectData => {
        console.log(projectData)
        
        questions.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return questions;
        }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptProject();
init();
