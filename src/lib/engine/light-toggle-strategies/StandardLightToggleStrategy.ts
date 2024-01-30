import type { ILightToggleStrategy } from "./ILightToggleStrategy";

export class StandardLightToggleStrategy implements ILightToggleStrategy {
  toggle(grid: boolean[][], row: number, col: number): boolean[][] {
    if (grid.length === 0) {
      throw new Error("Grid is empty");
    }

    if (row < 0 || row >= grid.length) {
      throw new Error("Row is out of bounds");
    }

    if (col < 0 || col >= grid[0].length) {
      throw new Error("Column is out of bounds");
    }

    const newGrid = grid.map((row) => [...row]);

    newGrid[row][col] = !newGrid[row][col];

    if (row > 0) {
      newGrid[row - 1][col] = !newGrid[row - 1][col];
    }

    if (row < newGrid.length - 1) {
      newGrid[row + 1][col] = !newGrid[row + 1][col];
    }

    if (col > 0) {
      newGrid[row][col - 1] = !newGrid[row][col - 1];
    }

    if (col < newGrid[0].length - 1) {
      newGrid[row][col + 1] = !newGrid[row][col + 1];
    }

    return newGrid;
  }
}
