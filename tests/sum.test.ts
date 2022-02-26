import { sum } from "../src/ts/index";
test("Adds 1  + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
