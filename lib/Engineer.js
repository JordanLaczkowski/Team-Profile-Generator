const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.GitHub = GitHub;
  }
  getRole() {
    return "Engineer";
    // console.log(
    //   `Hello my name is ${this.name}, my role is ${this.id}, my email is ${this.email} `
    // );
  }
  getGitHub() {
    return this.GitHub;
  }
}

module.exports = Engineer;
