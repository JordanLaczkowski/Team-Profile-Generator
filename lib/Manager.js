const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
    // console.log(
    //   `Hello my name is ${this.name}, my role is ${this.id}, my email is ${this.email} `
    // );
  }

  getOfficeNumber() {
    return this.officeNumber;
    // console.log(
    //   `Hello my name is ${this.name}, my role is ${this.id}, my email is ${this.email} `
    // );
  }
}
module.exports = Manager;
