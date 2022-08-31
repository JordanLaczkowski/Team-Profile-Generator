const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

managerQuestions = [
  //Need an intro that says:
  //Welcome to Team Profile Generator
  //Use 'npm run reset' to reset the dist folder
  //Build your team - (need to add this)

  //buildTeam is not called anywhere/made anywhere
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "type",
    choices: [
      "Engineer",
      "Intern",
      "I do not want to add any other team members",
    ],
  },
];

engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "GitHub",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "type",
    choices: [
      "Engineer",
      "Intern",
      "I do not want to add any other team members",
    ],
  },
];

internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "GitHub",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "type",
    choices: [
      "Engineer",
      "Intern",
      "I do not want to add any other team members",
    ],
  },
];

var engineers = new Array();
var manager = new Array();
var interns = new Array();

function generateIndexHtml() {}

inquirer.prompt(managerQuestions).then((data) => {
  console.log(data);
  addManager(data);
  if (data.type == "Engineer") {
    addEngineer();
  } else if (data.type == "Intern") {
    addIntern();
  } else {
    return;
  }
});

function addIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    var newIntern = new Intern(data.name, data.id, data.email);
    interns.push(newIntern);
    addNextPerson(data.type);
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    var newEngineer = new Engineer(data.name, data.id, data.email);
    engineers.push(newEngineer);
    addNextPerson(data.type);
  });
}

function addManager(data) {
  var newManager = new Manager(
    data.name,
    data.id,
    data.email,
    data.officeNumber
  );
  manager.push(newManager);
  addNextPerson(data.type);
}

function addNextPerson(choice) {
  if (choice == "Engineer") {
    addEngineer();
  } else if (choice == "Intern") {
    addIntern();
  } else {
    generateIndexHtml();
  }
}

//test then classes then contsruct the quesitons after everything passes

/*
Questions:
1. Need help running index.js 
2. How do I generate an HTML file with the data I have in the arrays? 
3. How to add intro before the questions 
*/
