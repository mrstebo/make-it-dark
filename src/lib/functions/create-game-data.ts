export const createGameData = (rows: number, columns: number) => {
    return Array(rows)
			.fill([])
			.map(() =>
				Array(columns)
					.fill(0)
					.map(() => (Math.random() > 0.8 ? 1 : 0))
			)
}