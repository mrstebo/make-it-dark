<script>
  export let data;
</script>

<main>
  <h1>Game</h1>
  <p>Level: {data.level}</p>
  <pre>{JSON.stringify(data.levelData, null, 2)}</pre>
</main>