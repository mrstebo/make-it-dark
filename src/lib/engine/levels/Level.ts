export abstract class Level {
  private levelData?: boolean[][];

  protected constructor(
    public readonly rows: number,
    public readonly columns: number,
    private readonly tollerence: number,
  ) {}

  setupLevel(): boolean[][] {
    if (!this.levelData) {
      this.levelData = new Array(this.rows).fill(
        new Array(this.columns).fill(Math.random() > this.tollerence),
      );
    }

    return this.levelData;
  }
}
