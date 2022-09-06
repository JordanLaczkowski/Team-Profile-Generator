const Intern = require("../lib/Intern.js");
test("create an intern", () => {
  const int = new Intern();
  expect(typeof int).toBe("object");
});

test("added a name to an intern", () => {
  const int = new Intern("Jordan");
  const firstName = "Jordan";
  expect(int.name).toBe("Jordan");
});

test("added an id to an intern", () => {
  const id = 1;
  var name = "Jordan";
  const email = "jordan@email.com";
  const int = new Intern("name", id);

  expect(int.id).toBe(1);
});

test("added a role to an intern", () => {
  const role = "Intern";
  const int = new Intern();
  expect(int.getRole()).toBe("Intern");
});

test("added an email to an intern", () => {
  const email = "jordan@email.com";
  const id = 1;
  var name = "Jordan";
  const int = new Intern(name, id, email);
  expect(int.email).toBe("jordan@email.com");
});

test("added a school to an intern", () => {
  const school = "DU";
  const id = 1;
  var name = "Jordan";
  const int = new Intern(name, id, "email", school);
  expect(int.school).toBe("DU");
});
