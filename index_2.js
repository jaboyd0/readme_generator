const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

// const url = `https://api.github.com/users/${response.github_user}`;
// const data = await axios.get(url);


const writeFileAsync = util.promisify(fs.writeFile);

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
    const { movie } = answers.github_user;

    const { data } = await axios.get(
      `https://api.github.com/users/${movie}`
    );

    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}

function generateREADME(answers) {
  return `
# ${answers.title}

## Discription

  ${answers.Description}

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
  ${getGithub()}
  ${answers.Email}
  `;
}

function init() {
  console.log("hi");

  promptUser()
    .then((answers) => {
      return writeFileAsync("newREADME.md", generateREADME(answers));
    }).then(() => {
      console.log("Successfully wrote to README");
    }).catch(error => console.log(error));
}

init();
