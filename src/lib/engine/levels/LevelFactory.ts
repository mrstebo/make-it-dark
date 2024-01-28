import { Level } from "./Level";
import { StandardLevel } from "./StandardLevel";
import { TestLevel } from "./TestLevel";

export class LevelFactory {
  createLevel(levelType: string): Level {
    switch (levelType) {
      case "standard":
        return new StandardLevel();

      case "test":
        return new TestLevel("test");

      case "easyWin":
        return new TestLevel("easyWin");

      default:
        throw new Error(`Unknown level type: ${levelType}`);
    }
  }
}
