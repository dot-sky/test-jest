import { caesarCipher, isUpperCase } from "../caesarCipher.js";
test("cypher 3 => 'abc' to 'def'", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
test("cypher 3 => 'ABC' to 'DEF'", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});
test("cypher 3 => 'HeLLo' to 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("cypher 3 => 'xyz' to 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("cypher 3 => 'Hello, World!' to 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("cypher 3 => 'aBC , ! /. wXyZ' to 'dEF , ! /. zAbC'", () => {
  expect(caesarCipher("aBC , ! /. wXyZ", 3)).toBe("dEF , ! /. zAbC");
});
test("cypher -4 => 'hello this is a !! Text' to 'dEF , ! /. zAbC'", () => {
  expect(caesarCipher("HELLO this Is A !! Text", -4)).toBe(
    "DAHHK pdeo Eo W !! Patp"
  );
});
