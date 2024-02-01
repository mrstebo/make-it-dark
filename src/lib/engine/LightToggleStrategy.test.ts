import { beforeEach, describe, expect, it } from "vitest";
import { LightToggleStrategy } from "./LightToggleStrategy";

describe("LightToggleStrategy", () => {
  let lightToggleStrategy: LightToggleStrategy;

  beforeEach(() => {
    lightToggleStrategy = new LightToggleStrategy();
  });

  describe("toggle", () => {
    it("should toggle the light at the given coordinates", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const updatedGrid = lightToggleStrategy.toggle(grid, 1, 1);

      expect(updatedGrid[1][1]).toEqual(true);
    });

    it("should toggle adjacent lights", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const updatedGrid = lightToggleStrategy.toggle(grid, 1, 1);

      expect(updatedGrid).toStrictEqual([
        [false, true, false],
        [true, true, true],
        [false, true, false],
      ]);
    });

    it("should toggle adjacent lights on the edge of the grid", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const updatedGrid = lightToggleStrategy.toggle(grid, 0, 0);

      expect(updatedGrid).toStrictEqual([
        [true, true, false],
        [true, false, false],
        [false, false, false],
      ]);
    });

    it("should toggle adjacent lights off that are already on", () => {
      const grid = [
        [false, true, false],
        [true, true, true],
        [false, true, false],
      ];

      const updatedGrid = lightToggleStrategy.toggle(grid, 0, 0);

      expect(updatedGrid).toStrictEqual([
        [true, false, false],
        [false, true, true],
        [false, true, false],
      ]);
    });

    it("should throw an error if the given coordinates are out of bounds", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      expect(() => lightToggleStrategy.toggle(grid, -1, 0)).toThrow("Row -1 is out of bounds");
      expect(() => lightToggleStrategy.toggle(grid, 0, -1)).toThrow("Column -1 is out of bounds");
      expect(() => lightToggleStrategy.toggle(grid, 3, 0)).toThrow("Row 3 is out of bounds");
      expect(() => lightToggleStrategy.toggle(grid, 0, 3)).toThrow("Column 3 is out of bounds");
    });
  });
});
