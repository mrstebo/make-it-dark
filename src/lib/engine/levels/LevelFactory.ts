import { Level } from "./Level";
import { StandardLevel } from "./StandardLevel";
import { TestLevel, type TestLevelType } from "./TestLevel";

export type LevelType = "standard" & TestLevelType;

export class LevelFactory {
  createLevel(levelType: LevelType): Level {
    switch (levelType) {
      case "standard":
        return new StandardLevel();

      case "test":
      case "easyWin":
        return new TestLevel(levelType);

      default:
        throw new Error(`Unknown level type: ${levelType}`);
    }
  }
}
