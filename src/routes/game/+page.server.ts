export function load() {
  return {
    level: 1,
    levelData: Array(5).fill([]).map(
      () => Array(5).fill(0).map(
        () => Math.random() > 0.8 ? 1 : 0
      )
    ),
  }
}