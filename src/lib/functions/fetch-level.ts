import { createGameData } from "./create-game-data";

const LEVELS = [
  createGameData(5, 5),
  createGameData(6, 6),
  createGameData(7, 7),
  createGameData(9, 9),
  createGameData(10, 10),
  createGameData(15, 15),
  createGameData(20, 20),
];

export const fetchLevel = (level: number) => {
  return LEVELS[level - 1];
};
