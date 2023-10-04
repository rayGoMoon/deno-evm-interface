import { assertEquals, describe, it } from "./deps.ts";

import { add, subtract } from "../src/func.ts";

describe("Demo BDD Test", () => {
  it("should add 2 + 3 = 5", () => {
    assertEquals(add(2, 3), 5);
  });

  it("should subtract 3 - 2 = 1", () => {
    assertEquals(subtract(3, 2), 1);
  });
});
