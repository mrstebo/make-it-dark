import { GameEngine } from "./GameEngine";
import { expect, test } from "vitest";
import { LevelFactory } from "./levels/LevelFactory";
import { StandardLightToggleStrategy } from "./light-toggle-strategies/StandardLightToggleStrategy";

test("GameEngine should initialize and start a standard game", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());

  engine.setLevel("standard");
  engine.startGame();

  const initialGridState = engine.__getCurrentGridState();
  expect(initialGridState).toHaveLength(5);
  expect(initialGridState.some((row) => row.some((light) => !light))).toBe(true);
  expect(initialGridState.some((row) => row.some((light) => light))).toBe(true);
});

test("GameEngine should update grid state on making a move", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());
  
  engine.setLevel("test");
  engine.startGame();

  engine.makeMove(1, 1);
  const updatedGridState = engine.__getCurrentGridState();

  expect(updatedGridState).toEqual([
    [false, true, false, false, false],
    [true, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, true],
  ]);
});

test("GameEngine should correctly identify the win condition", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());

  engine.setLevel("easyWin");
  engine.startGame();

  engine.makeMove(3, 2);

  expect(engine.checkWinCondition()).toBe(true);
});
