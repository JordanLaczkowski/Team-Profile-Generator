const Engineer = require("../lib/Engineer.js");
test("create an engineer", () => {
  const eng = new Engineer();
  expect(typeof eng).toBe("object");
});

test("added a name to an engineer", () => {
  const eng = new Engineer("Jordan");
  const firstName = "Jordan";
  expect(eng.name).toBe("Jordan");
});

test("added an id to an engineer", () => {
  const id = 1;
  var name = "Jordan";
  const email = "jordan@email.com";
  const eng = new Engineer("name", id);

  expect(eng.id).toBe(1);
});

test("added a role to an engineer", () => {
  const role = "Engineer";
  const eng = new Engineer();
  expect(eng.getRole()).toBe("Engineer");
});

test("added an email to an engineer", () => {
  const email = "jordan@email.com";
  const id = 1;
  var name = "Jordan";
  const eng = new Engineer(name, id, email);
  expect(eng.email).toBe("jordan@email.com");
});

test("added an github to an engineer", () => {
  const GitHub = "JordanLaczkowski";
  const id = 1;
  var name = "Jordan";
  const eng = new Engineer(name, id, "email", GitHub);
  expect(eng.GitHub).toBe("JordanLaczkowski");
});

//  ✓ create an engineer (6 ms)
// ✓ added a name to an engineer
// ✕ added an id to an engineer
// ✓ added a role to an engineer (1 ms)
// ✕ added an email to an engineer
// ✕ added an github to an engineer (1 ms)
