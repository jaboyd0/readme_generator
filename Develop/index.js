const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeToFile = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "Email",
        message: "What is your Email address?"
      },
      {
        type: "input",
        name: "Description",
        message: "What does your program do?"
      },
      {
        type: "input",
        name: "Table of Contents",
        message: "What are the parts of your project?"
      },
      {
        type: "input",
        name: "Installation",
        message: "What needs to be installed?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
];

return inquirer.prompt(questions);

function writeToFile(fileName, data) {

}

function init() {


    return inquirer.prompt(questions);
}

init();
