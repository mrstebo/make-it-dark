export type LightSetterFunction = (row: number, col: number) => boolean;

export class Level {
  private levelData?: boolean[][];

  constructor(
    public readonly rows: number,
    public readonly columns: number,
    private readonly lightSetter: LightSetterFunction = () => Math.random() < 0.8,
  ) {
  }

  setupLevel(): boolean[][] {
    if (!this.levelData) {
        this.levelData = Array.from({ length: this.rows }, (_, row) => {
          return Array.from({ length: this.columns }, (_, col) => {
            return this.lightSetter(row, col)
          });
        });
    }

    return this.levelData;
  }
}
