import { beforeEach, describe, expect, it } from "vitest";
import { WinConditionChecker } from "./WinConditionChecker";

describe("WinConditionChecker", () => {
  let winConditionChecker: WinConditionChecker;

  beforeEach(() => {
    winConditionChecker = new WinConditionChecker();
  });

  describe("check", () => {
    it("should return true if all the cells are false", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const result = winConditionChecker.check(grid);

      expect(result).toBe(true);
    });

    it("should return false if all the cells are true", () => {
      const grid = [
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ];

      const result = winConditionChecker.check(grid);

      expect(result).toBe(false);
    });

    it("should return false if some cells are true and some are false", () => {
      const grid = [
        [true, false, false],
        [false, true, false],
        [false, false, true],
      ];

      const result = winConditionChecker.check(grid);

      expect(result).toBe(false);
    });
  });
});
