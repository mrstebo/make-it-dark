import { Level } from "./Level";

export type TestLevelType = "easyWin" | "test";

export class TestLevel extends Level {
  constructor(private readonly testLevelType: TestLevelType) {
    super(5, 5, 0);
  }

  setupLevel(): boolean[][] {
    switch (this.testLevelType) {
      case "easyWin":
        return [
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, true, false, false],
          [false, true, true, true, false],
          [false, false, true, false, false],
        ];

      default:
        return [
          [false, false, false, false, false],
          [false, true, false, false, false],
          [false, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, true],
      ];
    }
  }
}
