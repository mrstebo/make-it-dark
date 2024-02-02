import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WinConditionChecker } from "./WinConditionChecker";
import { LightToggleStrategy } from "./LightToggleStrategy";
import { GridManager } from "./GridManager";
import { GameEngine } from "./GameEngine";

describe("GameEngine", () => {
  let gridManager: GridManager;
  let lightToggleStrategy: LightToggleStrategy;
  let winConditionChecker: WinConditionChecker;
  let gameEngine: GameEngine;

  beforeEach(() => {
    gridManager = new GridManager();
    lightToggleStrategy = new LightToggleStrategy();
    winConditionChecker = new WinConditionChecker();
    gameEngine = new GameEngine(gridManager, lightToggleStrategy, winConditionChecker);
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
  });

  describe("restartGame", () => {
    it("should call gridManager.createGrid", () => {
      const createGridSpy = vi.spyOn(gridManager, "createGrid");
      gameEngine.startGame();
      gameEngine.restartGame();
      expect(createGridSpy).toHaveBeenCalledTimes(1);
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

    it("should throw an error if the game has not started yet", () => {
      expect(() => gameEngine.hasWon()).toThrow("Game has not started yet");
    });
  });
});
