import type { Level } from "./levels/Level";
import { LevelFactory } from "./levels/LevelFactory";
import type { ILightToggleStrategy } from "./light-toggle-strategies/ILightToggleStrategy";

export class GameEngine {
  private level?: Level;
  private grid?: boolean[][];

  constructor(
    private readonly levelFactory: LevelFactory,
    private readonly lightToggleStrategy: ILightToggleStrategy,
  ) {}

  setLevel(levelType: string): void {
    this.level = this.levelFactory.createLevel(levelType);
  }

  startGame(): void {
    if (!this.level) {
      throw new Error("No level has been set yet");
    }

    this.grid = this.level.setupLevel();
  }

  makeMove(row: number, col: number): void {
    if (!this.grid) {
      throw new Error("Game has not started yet");
    }

    this.grid = this.lightToggleStrategy.toggle(this.grid, row, col);
  }

  checkWinCondition(): boolean {
    if (!this.grid) {
      throw new Error("Game has not started yet");
    }

    return this.grid.every((row) => row.every((light) => !light));
  }

  __getCurrentGridState(): boolean[][] {
    return this.grid ?? [];
  }
}
