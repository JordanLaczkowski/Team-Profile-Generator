const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.GitHub = GitHub;
  }
}
module.exports = Engineer;
