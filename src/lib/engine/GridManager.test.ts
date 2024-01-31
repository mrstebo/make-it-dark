import { beforeEach, describe, expect, it } from "vitest";
import { GridManager } from "./GridManager";

describe("GridManager", () => {
  let gridManager: GridManager;

  beforeEach(() => {
    gridManager = new GridManager();
  });

  describe("createGrid", () => {
    it("should create a grid with the correct number of rows", () => {
      const rows = 5;
      const columns = 5;

      const grid = gridManager.createGrid(rows, columns);

      expect(grid.length).toEqual(rows);
    });

    it("should create a grid with the correct number of columns", () => {
      const rows = 5;
      const columns = 5;

      const grid = gridManager.createGrid(rows, columns);

      expect(grid[0].length).toEqual(columns);
    });

    it("should throw an error if the number of rows is less than 1", () => {
      expect(() => gridManager.createGrid(0, 5)).toThrow("Number of rows must be greater than 0");
    });

    it("should throw an error if the number of columns is less than 1", () => {
      expect(() => gridManager.createGrid(5, 0)).toThrow("Number of columns must be greater than 0");
    });
  });
});