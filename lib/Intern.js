const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
  getRole() {
    return "Intern";
    // console.log(
    //   `Hello my name is ${this.name}, my role is ${this.id}, my email is ${this.email} `
    // );
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
