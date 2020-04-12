const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
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
]);
}

function generateREADME(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
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
      return writeFileAsync("index.html", generateREADME(answers));
    }).then(() => {
      console.log("Successfully wrote to README");
    }).catch(error => console.log(error));
}

init();
