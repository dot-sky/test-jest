import { add, subtract, multiply, divide } from "../calculator.js";

// addition
test("adds 1 + 2", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds -3 + 2", () => {
  expect(add(-3, 2)).toBe(-1);
});

test("adds 0.1 + 0.2", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// subtraction

test("subtracts 1 - 2", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("subtracts 1 - 2", () => {
  expect(subtract(10, 2)).toBe(8);
});

test("subtracts 0.1 - 0.2", () => {
  expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

// multiplication
test("calculates 1 * 2", () => {
  expect(multiply(1, 2)).toBe(2);
});
test("calculates 8 * 200", () => {
  expect(multiply(8, 200)).toBe(1600);
});
test("calculates 8 * 0.4", () => {
  expect(multiply(8, 0.4)).toBeCloseTo(3.2);
});

// division
test("calculates 8 / 2", () => {
  expect(divide(8, 2)).toBe(4);
});
test("calculates 8 / 16", () => {
  expect(divide(8, 16)).toBeCloseTo(0.5);
});
test("calculates 8 / 0.4", () => {
  expect(divide(8, 0.4)).toBeCloseTo(20);
});
test("calculates 0.8 / 2", () => {
  expect(divide(0.8, 2)).toBeCloseTo(0.4);
});

test("calculates 1 / 0, throws error", () => {
  expect(() => divide(1, 0)).toThrow("Error! Division by zero");
});
