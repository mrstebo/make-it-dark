import { GridManager } from "./GridManager";
import { GridRandomizer } from "./GridRandomizer";
import { LightToggleStrategy } from "./LightToggleStrategy";
import { WinConditionChecker } from "./WinConditionChecker";

export class GameEngine {
  private initialGrid: boolean[][] = [];
  private grid: boolean[][] = [];

  constructor(
    private readonly gridManager: GridManager,
    private readonly lightToggleStrategy: LightToggleStrategy,
    private readonly winConditionChecker: WinConditionChecker,
    private readonly gridRandomizer: GridRandomizer = new GridRandomizer(),
  ) {}

  startGame(): void {
    if (this.initialGrid.length) {
      throw new Error("Game has already started");
    }

    this.initialGrid = this.gridRandomizer.randomize(this.gridManager.createGrid(5, 5));
    this.grid = [...this.initialGrid];
  }

  restartGame(): void {
    if (!this.initialGrid.length) {
      throw new Error("Game has not started yet");
    }

    this.grid = [...this.initialGrid];
  }

  toggleLight(x: number, y: number): void {
    if (!this.initialGrid.length) {
      throw new Error("Game has not started yet");
    }

    this.grid = this.lightToggleStrategy.toggle(this.grid, x, y);
  }

  hasWon(): boolean {
    if (!this.initialGrid.length) {
      throw new Error("Game has not started yet");
    }

    return this.winConditionChecker.check(this.grid);
  }

  getGrid(): boolean[][] {
    return [...this.grid];
  }
}
