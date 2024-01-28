<script>
  import { fetchLevel } from "$lib/functions/fetch-level";
  import GameGrid from "./GameGrid.svelte";

  let level = 1;
  let levelData = fetchLevel(level);
  let moves = 0;

  $: data = [...levelData];
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
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 20px;
			background-color: #40a;
			border: 2px solid #306;
			color: #fff;
		"
  >
    <h1>Make It Dark</h1>
    <h2>Level: {level}</h2>
  </div>
  <div
    style="
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 20px;
			background-color: #40a;
			border: 2px solid #306;
			color: #fff;
		"
  >
    <h2>Moves: {moves}</h2>
  </div>
  <GameGrid
    {data}
    onChange={(location) => {
      moves++;
      data[location.x][location.y] = data[location.x][location.y] === 1 ? 0 : 1;
    }}
  />
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
      on:click={() => {
        moves = 0;
        data = levelData;
      }}
    >
      Reset
    </button>
  </div>
</div>
