<script>
	import GameGrid from './GameGrid.svelte';

	export let data;
</script>

<main>
	<h1>Game</h1>
	<p>Level: {data.level}</p>
	<GameGrid data={data.levelData} />
</main>
