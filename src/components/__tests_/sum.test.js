import { sum } from "../sum";

test("Sum function test", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
