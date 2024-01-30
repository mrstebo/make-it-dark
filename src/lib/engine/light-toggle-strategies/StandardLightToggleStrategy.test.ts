import { StandardLightToggleStrategy } from "./StandardLightToggleStrategy";
import { describe, expect, it } from "vitest";

describe("StandardLightToggleStrategy", () => {
  describe("toggle", () => {
    it("should toggle the selected light", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const updatedGrid = strategy.toggle(grid, 1, 1);

      expect(updatedGrid[1][1]).toBe(true);
    });

    it("should toggle the adjacent lights", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      expect(strategy.toggle(grid, 1, 1)).toStrictEqual([
        [false, true, false],
        [true, true, true],
        [false, true, false],
      ]);
    });

    it("should not toggle lights outside of the grid", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      expect(strategy.toggle(grid, 0, 0)).toStrictEqual([
        [true, true, false],
        [true, false, false],
        [false, false, false],
      ]);
    });

    it("should not mutate the original grid", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      strategy.toggle(grid, 1, 1);

      expect(grid[1][1]).toBe(false);
    });

    it("should throw an error if the grid is empty", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid: boolean[][] = [];

      expect(() => strategy.toggle(grid, 0, 0)).toThrowError("Grid is empty");
    });

    it("should throw an error if the row is out of bounds", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      expect(() => strategy.toggle(grid, -1, 1)).toThrowError("Row is out of bounds");
      expect(() => strategy.toggle(grid, 3, 1)).toThrowError("Row is out of bounds");
    });

    it("should throw an error if the column is out of bounds", () => {
      const strategy = new StandardLightToggleStrategy();
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      expect(() => strategy.toggle(grid, 1, -1)).toThrowError("Column is out of bounds");
      expect(() => strategy.toggle(grid, 1, 3)).toThrowError("Column is out of bounds");
    });
  });
});
