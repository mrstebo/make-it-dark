<script>
	/** @type {number[][]}*/
	export let data;

	export let onReset = () => {};

	let blockSize = 100;
	let blockGap = 5;
	let columns = data[0].length;
	let rows = data.length;
</script>

<div
	style="
		border: 1px solid #000;
		width: fit-content;
		background-color: #dedede;
	"
>
	<div
		style="
		display: grid;
		grid-template-columns: repeat({columns}, {blockSize}px);
		grid-template-rows: repeat({rows}, {blockSize}px);
		grid-gap: {blockGap}px;
		width: {(columns * blockSize) + (columns * blockGap) - blockGap}px;
		background-color: #fff;
		margin: 20px;
	"
	>
		{#each data as row}
			{#each row as cell}
				<div 
					style="
						background-color: {cell === 1 ? '#f00' : '#000'};
						width: {blockSize}px;
						height: {blockSize}px;
					"
				/>
			{/each}
		{/each}
	</div>
	<div
		style="
			display: flex;
			justify-content: center;
			margin: 60px 20px 20px;
		"
	>
		<button
			style="
				padding: 10px;
				border: 1px solid #000;
				background-color: #fff;
				cursor: pointer;
				width: 100%;
			"
			on:click={onReset}
		>
			Reset
		</button>
	</div>
</div>
