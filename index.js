const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

// //console.log(
//   `Welcome to Team Profile Generator. Use 'npm run reset' to reset the dist folder. Build your team`
// );
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
    <div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

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
    var newIntern = new Intern(data.name, data.id, data.email);
    console.log(`Intern Added!`);
    employee.push(newIntern);
    addNextPerson(data.type);
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    var newEngineer = new Engineer(data.name, data.id, data.email);
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
  console.log(employee);
  employee.map((employee) => {
    if (employee == "Engineer") {
      return `<ul>
      <li> ${employee.name}
      
      </li>
      <li> ${employee.id}
      
      </li>
      <li> ${employee.email}
      
      </li>
      <li> ${employee.GitHub}
      
      </li>
      </ul>`;
    } else {
      return `To be added later`;
    }
  });
}
function generateEmployeeCard(employee) {
  console.log(employee);
  employee.map((employee) => {
    if (employee == "Intern") {
      return `<ul>
      <li> ${employee.name}
      
      </li>
      <li> ${employee.id}
      
      </li>
      <li> ${employee.email}
      
      </li>
      <li> ${employee.school}
      
      </li>
      </ul>`;
    } else {
      return `To be added later`;
    }
  });
}

//console log of what occured 'team manager added' 'team engineer added'

//test then classes then contsruct the quesitons after everything passes

/*
Questions:
1. Need help running index.js 
2. How do I generate an HTML file with the data I have in the arrays? 
3. How to add intro before the questions 
*/
