const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
