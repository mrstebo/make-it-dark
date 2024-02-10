import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WinConditionChecker } from "./WinConditionChecker";
import { LightToggleStrategy } from "./LightToggleStrategy";
import { GridManager } from "./GridManager";
import { GameEngine } from "./GameEngine";
import { GridRandomizer } from "./GridRandomizer";

describe("GameEngine", () => {
  let gridManager: GridManager;
  let lightToggleStrategy: LightToggleStrategy;
  let winConditionChecker: WinConditionChecker;
  let gridRandomizer: GridRandomizer;
  let gameEngine: GameEngine;

  beforeEach(() => {
    gridManager = new GridManager();
    lightToggleStrategy = new LightToggleStrategy();
    winConditionChecker = new WinConditionChecker();
    gridRandomizer = new GridRandomizer();
    gameEngine = new GameEngine(gridManager, lightToggleStrategy, winConditionChecker, gridRandomizer);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("startGame", () => {
    it("should call gridManager.createGrid", () => {
      const createGridSpy = vi.spyOn(gridManager, "createGrid");

      gameEngine.startGame();

      expect(createGridSpy).toHaveBeenCalledWith(5, 5);
    });

    it("should set the initialGrid to the result of gridManager.createGrid", () => {
      const initialGrid = gridManager.createGrid(5, 5);
      vi.spyOn(gridManager, "createGrid").mockReturnValue(initialGrid);
      vi.spyOn(gridRandomizer, "randomize").mockReturnValue(initialGrid);

      gameEngine.startGame();

      expect(gameEngine.getGrid()).toStrictEqual(initialGrid);
    });
  });

  describe("restartGame", () => {
    it("should call gridManager.createGrid", () => {
      const createGridSpy = vi.spyOn(gridManager, "createGrid");

      gameEngine.startGame();
      gameEngine.restartGame();

      expect(createGridSpy).toHaveBeenCalledTimes(1);
    });

    it("should reset the grid to the initial grid", () => {
      const initialGrid = gridManager.createGrid(5, 5);
      vi.spyOn(gridManager, "createGrid").mockReturnValue(initialGrid);
      vi.spyOn(gridRandomizer, "randomize").mockReturnValue(initialGrid);

      gameEngine.startGame();
      gameEngine.toggleLight(0, 0);
      gameEngine.restartGame();

      expect(gameEngine.getGrid()).toStrictEqual(initialGrid);
    });

    it("should throw an error if the game has not started yet", () => {
      expect(() => gameEngine.restartGame()).toThrow("Game has not started yet");
    });
  });

  describe("toggleLight", () => {
    it("should call lightToggleStrategy.toggle", () => {
      const toggleLightSpy = vi.spyOn(lightToggleStrategy, "toggle");

      gameEngine.startGame();
      gameEngine.toggleLight(0, 0);

      expect(toggleLightSpy).toHaveBeenCalled();
    });

    it("should update the grid with the result of lightToggleStrategy.toggle", () => {
      const initialGrid = gridManager.createGrid(3, 3);
      const updatedGrid = lightToggleStrategy.toggle(initialGrid, 1, 1);
      vi.spyOn(gridManager, "createGrid").mockReturnValue(initialGrid);
      vi.spyOn(gridRandomizer, "randomize").mockReturnValue(initialGrid);
      vi.spyOn(lightToggleStrategy, "toggle").mockReturnValue(updatedGrid);

      gameEngine.startGame();
      gameEngine.toggleLight(1, 1);

      expect(gameEngine.getGrid()).toStrictEqual(updatedGrid);
    });

    it("should throw an error if the game has not started yet", () => {
      expect(() => gameEngine.toggleLight(0, 0)).toThrow("Game has not started yet");
    });
  });

  describe("hasWon", () => {
    it("should call winConditionChecker.check", () => {
      const checkSpy = vi.spyOn(winConditionChecker, "check");

      gameEngine.startGame();
      gameEngine.hasWon();

      expect(checkSpy).toHaveBeenCalled();
    });

    it("should return the result of winConditionChecker.check", () => {
      vi.spyOn(winConditionChecker, "check").mockReturnValue(true);

      gameEngine.startGame();

      expect(gameEngine.hasWon()).toBe(true);
    });

    it("should throw an error if the game has not started yet", () => {
      expect(() => gameEngine.hasWon()).toThrow("Game has not started yet");
    });
  });
});
