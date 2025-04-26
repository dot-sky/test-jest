import { capitalize } from "../capitalize.js";

test("capitalizes 'hello' to 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("capitalizes 'Morning' to 'Morning'", () => {
  expect(capitalize("Morning")).toBe("Morning");
});
test("capitalizes '' to ''", () => {
  expect(capitalize("")).toBe("");
});
