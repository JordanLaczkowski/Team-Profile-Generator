const Employee = require("../lib/Employee.js");
test("create an employee", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("added a name to an employee", () => {
  const emp = new Employee("Jordan");
  const firstName = "Jordan";
  expect(emp.name).toBe("Jordan");
});

test("added an id to an employee", () => {
  const id = 1;
  var name = "Jordan";
  const email = "jordan@email.com";
  const emp = new Employee(name, id, email);

  expect(emp.id).toBe(1);
});

test("added a role to an employee", () => {
  const role = "Employee";
  const emp = new Employee();
  expect(emp.getRole()).toBe("Employee");
});

test("added an email to an employee", () => {
  const email = "jordan@email.com";
  const id = 1;
  var name = "Jordan";
  const emp = new Employee(name, id, email);
  expect(emp.email).toBe("jordan@email.com");
});
