export class GridManager {
  createGrid(rows: number, columns: number): boolean[][] {
    if (rows < 1) {
      throw new Error("Number of rows must be greater than 0");
    }

    if (columns < 1) {
      throw new Error("Number of columns must be greater than 0");
    }

    return Array.from({ length: rows }, () => Array.from({ length: columns }, () => false));
  }
}
