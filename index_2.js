const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// const generateMarkdown = require('./generateMarkdown');


function promptUser() {
  return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the Title of your project?"
      },
      {
        type: "input",
        name: "Description",
        message: "Give a brief description of your project."
      },
      {
        type: "input",
        name: "TableContents",
        message: "Give a table of contents for your project"
      },
      {
        type: "input",
        name: "Installation",
        message: "What needs to be installed?"
      },
      {
        type: "input",
        name: "Usage",
        message: "Give the usage of the project."
      },
      {
        type: "input",
        name: "License",
        message: "What license will you need?"
      },
      {
        type: "input",
        name: "Contributing",
        message: "Who contributed to the project?"
      },
      {
        type: "input",
        name: "Tests",
        message: "what tests will be required?"
      },
      {
        type: "input",
        name: "github_user",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "Email",
        message: "What is your Email address?"
      }
]);
}


async function getGithub() {
  try {
    const { username } = answers.github_user;

    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    console.log(data.email)
  
  } catch (err) {
    console.log(err);
  }
}

function generateREADME(answers) {
  return `
# ${answers.title} 

## Description

  ${answers.Description}

----
## Table of Content

  ${answers.TableContents}

## Installation

  ${answers.Installation}

## Usage

  ${answers.Usage}

## License

  ${answers.License}

## Contributers

  ${answers.Contributing}

## Testing

  ${answers.Tests}

## Creators github

  ${answers.github_user}
  github.com/jaboyd0.png
  ![github pic](http://www.github.com/${answers.github_user}.png)
  ${getGithub()}
  ${answers.Email}
  `;
}

function init() {
  console.log("hi");

  promptUser().then(async function(response) {
    console.log(response);

    const markdown = generateREADME(response);
    fs.writeFile('testREADME.md', markdown, function(error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('success')
        }
    });
  })};


init();
