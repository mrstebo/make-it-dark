import { GameEngine } from "./GameEngine";
import { describe, expect, it } from "vitest";
import { StandardLightToggleStrategy } from "./light-toggle-strategies/StandardLightToggleStrategy";
import { Level } from "./levels/Level";

class TestLevel extends Level {
  private grid: boolean[][] = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  constructor() {
    super(3, 3);
  }

  setupLevel(): boolean[][] {
    return this.grid;
  }

  __setGrid(grid: boolean[][]): void {
    this.grid = grid;
  }

  __getGrid(): boolean[][] {
    return this.grid;
  }
}

describe("GameEngine", () => {
  describe("startGame", () => {
    it("should initialize the grid", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]);

      engine.startGame();

      const initialGridState = engine.__getCurrentGridState();
      expect(initialGridState).toHaveLength(3);
      expect(initialGridState[0]).toHaveLength(3);
      expect(initialGridState.some((row) => row.some((light) => !light))).toBe(true);
      expect(initialGridState.some((row) => row.some((light) => light))).toBe(true);
    });

    it("should throw an error if the game has already started", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      engine.startGame();

      expect(() => engine.startGame()).toThrowError("Game has already started");
    });
  });

  describe("restartGame", () => {
    it("should reset the grid", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]);

      engine.startGame();
      engine.makeMove(1, 1);
      engine.restartGame();

      const initialGridState = engine.__getCurrentGridState();
      expect(initialGridState).toEqual(level.__getGrid())
    });

    it("should throw an error if the game has not started yet", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      expect(() => engine.restartGame()).toThrowError("Game has not started yet");
    });
  });

  describe("makeMove", () => {
    it("should toggle the selected light", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]);

      engine.startGame();
      engine.makeMove(1, 1);

      const updatedGridState = engine.__getCurrentGridState();
      expect(updatedGridState[1][1]).toBe(false);
    });

    it("should toggle the adjacent lights", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]);

      engine.startGame();
      engine.makeMove(1, 1);

      const updatedGridState = engine.__getCurrentGridState();
      expect(updatedGridState).toStrictEqual([
        [false, true, false],
        [true, false, true],
        [false, true, false],
      ]);
    });

    it("should throw an error if the game has not started yet", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      expect(() => engine.makeMove(1, 1)).toThrowError("Game has not started yet");
    });

    it("should throw an error if the game has already ended", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      engine.startGame();

      expect(engine.checkWinCondition()).toBe(true);
      expect(() => engine.makeMove(1, 1)).toThrowError("Game has already ended");
    });

    it("should throw an error if the row is out of bounds", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);
      const rowCount = level.__getGrid().length;

      engine.startGame();

      expect(() => engine.makeMove(-1, 1)).toThrowError("Row is out of bounds");
      expect(() => engine.makeMove(rowCount, 1)).toThrowError("Row is out of bounds");
    });

    it("should throw an error if the column is out of bounds", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);
      const colCount = level.__getGrid()[0].length;

      engine.startGame();

      expect(() => engine.makeMove(1, -1)).toThrowError("Column is out of bounds");
      expect(() => engine.makeMove(1, colCount)).toThrowError("Column is out of bounds");
    });
  });

  describe("checkWinCondition", () => {
    it("should throw an error if the game has not started yet", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      expect(() => engine.checkWinCondition()).toThrowError("Game has not started yet");
    });

    it("should return false if the game has not ended yet", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]);

      engine.startGame();

      expect(engine.checkWinCondition()).toBe(false);
    });

    it("should return true if the game has ended", () => {
      const level = new TestLevel();
      const lightToggleStrategy = new StandardLightToggleStrategy();
      const engine = new GameEngine(level, lightToggleStrategy);

      level.__setGrid([
        [false, true, false],
        [true, true, true],
        [false, true, false],
      ]);

      engine.startGame();
      engine.makeMove(1, 1);

      expect(engine.checkWinCondition()).toBe(true);
    });
  });
});
