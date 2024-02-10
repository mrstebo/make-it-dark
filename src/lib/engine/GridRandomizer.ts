export class GridRandomizer {
  randomize(grid: boolean[][]): boolean[][] {
    return grid.map((row) => row.map(() => Math.random() < 0.5));
  }
}
