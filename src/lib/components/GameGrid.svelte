<script>
  /** @type {number[][]}*/
  export let data;

  /** @type {(location: {x: number, y: number}) => void}*/
  export let onChange = (location) => {};

  let blockSize = 100;
  let blockGap = 5;
  let columns = data[0].length;
  let rows = data.length;
</script>

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
  {#each data as row, i}
    {#each row as cell, j}
      <button
        style="
                    background-color: {cell === 1 ? '#f00' : '#000'};
                    width: {blockSize}px;
                    height: {blockSize}px;
                    border: 1px solid #000;
                "
        on:click={() => onChange({ x: i, y: j })}
      />
    {/each}
  {/each}
</div>
