const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

console.log(`Welcome to Team Profile Generator. Build your team.`);
managerQuestions = [
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
    name: "school",
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

// var engineers = new Array();
// var manager = new Array();
// var interns = new Array();

let employee = [];

function generateIndexHtml(employee) {
  console.log("GENERATE INDEX HTML " + employee);
  const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
  </head>
  <body>
  <div class="flex-container">
      ${generateEmployeeCard(employee)}
      <!-- cards here -->
  
      <!--icon for what is picked -->
    </div>
    <style>
      /* add styling here */
    </style>
  </body>
</html>
`;
  fs.writeFileSync(`./dist/fileName.html`, page);
}

inquirer.prompt(managerQuestions).then((data) => {
  addManager(data);

  // if (data.type == "Engineer") {
  //   addEngineer();
  // } else if (data.type == "Intern") {
  //   addIntern();
  // } else {
  //   return;
  // }
});

function addIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    var newIntern = new Intern(data.name, data.id, data.email, data.school);
    console.log(`Intern Added!`);
    employee.push(newIntern);
    addNextPerson(data.type);
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    var newEngineer = new Engineer(data.name, data.id, data.email, data.GitHub);
    console.log(`Engineer Added!`);
    employee.push(newEngineer);
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
  console.log(`Manager Added!`);
  employee.push(newManager);
  addNextPerson(data.type);
}

function addNextPerson(choice) {
  if (choice == "Engineer") {
    addEngineer();
  } else if (choice == "Intern") {
    addIntern();
  } else {
    generateIndexHtml(employee);
  }
}

function generateEmployeeCard(employee) {
  var addHTML = "";
  console.log("GENERATE EMPLOYEE CARD: " + employee);
  for (i = 0; i < employee.length; i++) {
    console.log("THIS IS THE CLASS" + employee[i].constructor.name);
    if (employee[i].constructor.name == "Manager") {
      console.log("we have an Manager");
      addHTML =
        addHTML +
        `
      <div class="card" style="width: 18rem; display: -webkit-inline-box">
        <div class="card-body">
          <h5 class="card-title">${employee[i].name}</h5>
          <h5 class="card-title">${employee[i].constructor.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${employee[i].id}</h6>
          <a href="#" class="card-link">Email: ${employee[i].email}</a>
          <a href="#" class="card-link">Office Number: ${employee[i].officeNumber}</a>
        </div>`;
    } else if (employee[i].constructor.name == "Engineer") {
      console.log("we have an Engineer");
      addHTML =
        addHTML +
        `
      <div class="card" style="width: 18rem; display: -webkit-inline-box">
        <div class="card-body">
          <h5 class="card-title">${employee[i].name}</h5>
          <h5 class="card-title">${employee[i].constructor.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${employee[i].id}</h6>
          <a href="#" class="card-link">Email: ${employee[i].email}</a>
          <a href="https://github.com/${employee[i].GitHub}" target="_blank" class="card-link">GitHub: ${employee[i].GitHub}</a>
        </div>`;
    } else if (employee[i].constructor.name == "Intern") {
      console.log("we have an Intern");
      addHTML =
        addHTML +
        `
      <div class="card" style="width: 18rem; display: -webkit-inline-box">
        <div class="card-body">
          <h5 class="card-title">${employee[i].name}</h5>
          <h5 class="card-title">${employee[i].constructor.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${employee[i].id}</h6>
          <a href="#" class="card-link">Email: ${employee[i].email}</a>
          <a href="#" class="card-link">School: ${employee[i].school}</a>
        </div>`;
    }
    console.log(addHTML);
  }
  return addHTML;
}

//console log of what occured 'team manager added' 'team engineer added'

//test then classes then contsruct the quesitons after everything passes

/*
Questions:
1. Need help running index.js 
2. How do I generate an HTML file with the data I have in the arrays? 
3. How to add intro before the questions 
*/
