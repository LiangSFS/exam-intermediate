const isShellFile = require("../src/isShellFile.js");

test("isShellFile", () => {

  expect(isShellFile("bash.sh")).toBeTruthy();

  expect(isShellFile("bash.txt")).toBeFalsy();

  expect(isShellFile(".sh")).toBeFalsy();

  expect(isShellFile(".bash.sh")).toBeFalsy();
});