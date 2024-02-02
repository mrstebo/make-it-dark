export class WinConditionChecker {
  check(grid: boolean[][]): boolean {
    return grid.every((row) => row.every((light) => !light));
  }
}