export interface ILightToggleStrategy {
    toggle(grid: boolean[][], row: number, col: number): boolean[][];
}
