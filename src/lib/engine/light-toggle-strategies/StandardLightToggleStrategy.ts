import type { ILightToggleStrategy } from "./ILightToggleStrategy";

export class StandardLightToggleStrategy implements ILightToggleStrategy {
    toggle(grid: boolean[][], row: number, col: number): boolean[][] {
        // Toggling the selected light
        grid[row][col] = !grid[row][col];

        // Toggling adjacent lights
        if (row > 0) grid[row - 1][col] = !grid[row - 1][col]; // Above
        if (row < grid.length - 1) grid[row + 1][col] = !grid[row + 1][col]; // Below
        if (col > 0) grid[row][col - 1] = !grid[row][col - 1]; // Left
        if (col < grid[0].length - 1) grid[row][col + 1] = !grid[row][col + 1]; // Right

        return grid;
    }
}