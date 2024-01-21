<script>
	/** @type {number[][]}*/
	export let data;

	let columns = data[0].length;
	let rows = data.length;
</script>

<div
	style="
    display: grid;
    grid-template-columns: repeat({columns}, 20px);
    grid-template-rows: repeat({rows}, 20px);
    grid-gap: 2px;
"
>
	{#each data as row}
		{#each row as cell}
			<div class="cell" style="background-color: {cell === 1 ? '#f00' : '#000'}"></div>
		{/each}
	{/each}
</div>

<style>
	.cell {
		width: 20px;
		height: 20px;
	}
</style>
