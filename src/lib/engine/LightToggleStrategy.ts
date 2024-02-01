export class LightToggleStrategy {
  toggle(grid: boolean[][], row: number, column: number): boolean[][] {
    const updatedGrid = grid.map((row) => [...row]);

    if (row < 0 || row >= grid.length) {
        throw new Error(`Row ${row} is out of bounds`);
    }

    if (column < 0 || column >= grid[0].length) {
        throw new Error(`Column ${column} is out of bounds`);
    }

    updatedGrid[row][column] = !updatedGrid[row][column];

    if (row > 0) {
      updatedGrid[row - 1][column] = !updatedGrid[row - 1][column];
    }

    if (row < grid.length - 1) {
      updatedGrid[row + 1][column] = !updatedGrid[row + 1][column];
    }

    if (column > 0) {
      updatedGrid[row][column - 1] = !updatedGrid[row][column - 1];
    }

    if (column < grid[0].length - 1) {
      updatedGrid[row][column + 1] = !updatedGrid[row][column + 1];
    }

    return updatedGrid;
  }
}
