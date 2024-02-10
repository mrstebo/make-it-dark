<script lang="ts">
  export let data: boolean[][];

  export let onLightPressed = (rowIndex: number, colIndex: number): void => {};

  let blockSize = 50;
  let blockGap = 2;
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
		width: {columns * blockSize + columns * blockGap - blockGap}px;
		background-color: #fff;
		margin: 20px;
	"
  >
    {#each data as row, rowIndex}
      {#each row as col, colIndex}
        <button
          style="
						background-color: {col ? '#f00' : '#000'};
						width: {blockSize}px;
						height: {blockSize}px;
					"
          on:click={() => onLightPressed(rowIndex, colIndex)}
        />
      {/each}
    {/each}
  </div>
</div>
