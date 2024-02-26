import { beforeEach, describe, expect, it } from "vitest";
import { GridRandomizer } from "./GridRandomizer";

describe("GridRandomizer", () => {
  let gridRandomizer: GridRandomizer;

  beforeEach(() => {
    gridRandomizer = new GridRandomizer();
  });

  describe("randomize", () => {
    it("should randomize the grid", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const randomizedGrid = gridRandomizer.randomize(grid);

      expect(randomizedGrid).not.toStrictEqual(grid);
    });

    it("should randomize the grid with a 50% chance of being true", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const randomizedGrid = gridRandomizer.randomize(grid);

      expect(randomizedGrid).not.toStrictEqual([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ]);
    });
  });
});
