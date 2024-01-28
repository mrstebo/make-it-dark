import { GameEngine } from "./GameEngine";
import { expect, test } from "vitest";
import { LevelFactory } from "./levels/LevelFactory";
import { StandardLightToggleStrategy } from "./light-toggle-strategies/StandardLightToggleStrategy";

test("GameEngine should initialize and start a standard game", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());
  engine.setLevel("standard");
  engine.startGame();

  const initialGridState = engine.__getCurrentGridState(); // Assuming getGridState is a method to get current grid state
  expect(initialGridState).toHaveLength(5);
  expect(initialGridState.every((row) => row.every((light) => !light))).toBe(true);
});

test("GameEngine should update grid state on making a move", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());
  engine.setLevel("standard");
  engine.startGame();

  engine.makeMove(1, 1); // Making a move at the center
  const updatedGridState = engine.__getCurrentGridState();

  // Define the expected grid state after the move
  // (similar to the expected state in the light toggle strategy test)
  // ...

  expect(updatedGridState).toEqual(/* expected state */);
});

test("GameEngine should correctly identify the win condition", () => {
  const engine = new GameEngine(new LevelFactory(), new StandardLightToggleStrategy());
  engine.setLevel("standard");
  engine.startGame();

  // Simulate a series of moves that would lead to winning
  // ...

  expect(engine.checkWinCondition()).toBe(true);
});
