const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


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
        name: "Table of Contents",
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
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "Email",
        message: "What is your Email address?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the Title of your project?"
      }
]);
}

function generateREADME(answers) {
  return `
#${answers.title}
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
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
