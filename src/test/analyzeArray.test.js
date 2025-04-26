import { analyzeArray } from "../analyzeArray.js";

test("testing [1,8,3,4,2,6]", () => {
  const expected = { average: 4, min: 1, max: 8, length: 6 };
  const received = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(received.average).toBeCloseTo(expected.average);
  expect(received.min).toBe(expected.min);
  expect(received.max).toBe(expected.max);
  expect(received.length).toBe(expected.length);
});
