const Manager = require("../lib/Manager.js");
test("create a manager", () => {
  const manag = new Manager();
  expect(typeof manag).toBe("object");
});

test("added a name to a manager", () => {
  const manag = new Manager("Jordan");
  const firstName = "Jordan";
  expect(manag.name).toBe("Jordan");
});

test("added an id to a manager", () => {
  const id = 1;
  var name = "Jordan";
  const email = "jordan@email.com";
  const manag = new Manager("name", id);

  expect(manag.id).toBe(1);
});

test("added a role to a manager", () => {
  const role = "Manager";
  const manag = new Manager();
  expect(manag.getRole()).toBe("Manager");
});

test("added an email to a manager", () => {
  const email = "jordan@email.com";
  const id = 1;
  var name = "Jordan";
  const manag = new Manager(name, id, email);
  expect(manag.email).toBe("jordan@email.com");
});

test("added a school to a manager", () => {
  const officeNumber = "2";
  const id = 1;
  var name = "Jordan";
  const manag = new Manager(name, id, "email", officeNumber);
  expect(manag.officeNumber).toBe("2");
});
