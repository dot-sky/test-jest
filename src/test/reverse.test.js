import { reverse } from "../reverse.js";

test("reverses 'aloha' to 'ahola'", () => {
  expect(reverse("aloha")).toBe("ahola");
});

test("reverses 'everywhere' to 'erehwyreve'", () => {
  expect(reverse("everywhere")).toBe("erehwyreve");
});

test("reverses 'aaa' to 'aaa'", () => {
  expect(reverse("aaa")).toBe("aaa");
});

test("reverses '' to ''", () => {
  expect(reverse("")).toBe("");
});
