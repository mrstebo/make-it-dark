import type { Level } from "./levels/Level";
import type { ILightToggleStrategy } from "./light-toggle-strategies/ILightToggleStrategy";

export class GameEngine {
  private grid?: boolean[][];
  private winConditionMet = false;

  constructor(
    private readonly level: Level,
    private readonly lightToggleStrategy: ILightToggleStrategy,
  ) {}

  startGame(): void {
    if (this.grid) {
      throw new Error("Game has already started");
    }

    this.grid = this.level.setupLevel();
  }

  restartGame(): void {
    if (!this.grid) {
      throw new Error("Game has not started yet");
    }

    this.grid = this.level.setupLevel();
  }

  makeMove(row: number, col: number): void {
    if (!this.grid) {
      throw new Error("Game has not started yet");
    }

    if (this.winConditionMet) {
      throw new Error("Game has already ended");
    }

    if (row < 0 || row >= this.grid.length) {
      throw new Error("Row is out of bounds");
    }

    if (col < 0 || col >= this.grid[0].length) {
      throw new Error("Column is out of bounds");
    }

    this.grid = this.lightToggleStrategy.toggle(this.grid, row, col);
  }

  checkWinCondition(): boolean {
    if (!this.grid) {
      throw new Error("Game has not started yet");
    }

    this.winConditionMet = this.grid.every((row) => row.every((light) => !light));

    return this.winConditionMet;
  }

  /**
   * !!! This method is only used for testing !!!
   * 
   * @returns The current grid state. This is only used for testing.
   */
  __getCurrentGridState(): boolean[][] {
    return this.grid ?? [];
  }
}
