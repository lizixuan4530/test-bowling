import { add } from "./function";

describe("add function", () => {
  it("test", () => {
    // Test case 1: Adding 2 + 3 should equal 5
    expect(add(2, 3)).toBe(5);

    // Test case 2: Adding -1 + 1 should equal 0
    expect(add(-1, 1)).toBe(0);
  });
});
