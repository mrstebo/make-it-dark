export abstract class Level {
  private levelData?: boolean[][];

  protected constructor(
    public readonly rows: number,
    public readonly columns: number,
    private readonly tollerence: number,
    private readonly rng: () => number = Math.random,
  ) {
  }

  setupLevel(): boolean[][] {
    if (!this.levelData) {
        this.levelData = Array.from({ length: this.rows }, () => {
          return Array.from({ length: this.columns }, () => {
            return this.rng() < this.tollerence;
          });
        });
    }

    return this.levelData;
  }
}
