<script>
	import Game from '$lib/components/Game.svelte';

	export let data;
</script>

<main>
	<h1>Game</h1>
	<p>Level: {data.level}</p>
	<Game data={data.levelData} />
</main>
