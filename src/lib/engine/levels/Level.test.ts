import { describe, expect, it } from "vitest";
import { Level } from "./Level";

describe("Level", () => {
  describe("setupLevel", () => {
    it("should return a grid with the correct dimensions", () => {
      const level = new Level(3, 3);

      const grid = level.setupLevel();

      expect(grid).toHaveLength(3);

      grid.forEach((row) => {
        expect(row).toHaveLength(3);
      });
    });

    it("should return a grid with some lights on", () => {
      const level = new Level(3, 3);

      const grid = level.setupLevel();

      console.log(grid);

      let lightsOn = 0;
      grid.forEach((row) => {
        lightsOn += row.filter((light) => !!light).length;
      });
      expect(lightsOn).toBeGreaterThan(0);
    });
  });
});
