class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    console.log(
      `Hello my name is ${this.name}, my role is ${this.id}, my email is ${this.email} `
    );
  }
}

module.exports = Employee;
