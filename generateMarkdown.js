function generateMarkdown(data) {
  return `
  # ${answers.title} https://img.shields.io/codefactor/grade/github/jaboyd0/readme_generator/master

  ## Discription
  
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
    ${getGithub()}
    ${answers.Email}
    `;
}

module.exports = generateMarkdown;
