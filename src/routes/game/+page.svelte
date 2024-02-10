<script lang="ts">
  import { GridManager } from "$lib/engine/GridManager";
  import { LightToggleStrategy } from "$lib/engine/LightToggleStrategy";
  import { WinConditionChecker } from "$lib/engine/WinConditionChecker";
  import { GameEngine } from "$lib/engine/GameEngine";
  import Game from "$lib/components/Game.svelte";

  const engine = new GameEngine(
    new GridManager(),
    new LightToggleStrategy(),
    new WinConditionChecker(),
  );
  let started = false;
  let won = false;
  let moves = 0;
  let grid = engine.getGrid();

  function startGame() {
    engine.startGame();
    started = true;
    grid = engine.getGrid();
  }

  function restartGame() {
    engine.restartGame();
    grid = engine.getGrid();
    won = false;
    moves = 0;
  }

  function toggleLight(rowIndex: number, colIndex: number) {
    engine.toggleLight(rowIndex, colIndex);
    grid = engine.getGrid();
    won = engine.hasWon();
    moves = moves + 1;
  }

  setInterval(() => {
    if (started && !won) {
      const rows = grid.length;
      const cols = grid[0].length;

      toggleLight(Math.floor(Math.random() * rows), Math.floor(Math.random() * cols));
    }
  });
</script>

<div class="full-height">
  <section class="wrapper style1 special">
    <header class="major">
      <h1>Make It Dark</h1>
      <h2>How to play</h2>
    </header>
    <p>
      Click on the lights to turn them off. The goal is to turn off all the lights.
    </p>
    <div class="actions">
      <button on:click={() => restartGame()}>Reset</button>
      <button on:click={() => startGame()}>Start</button>
    </div>
  </section>

  {#if won}
    <section class="wrapper style3 special">
      <header class="major">
        <h2>You won!</h2>
      </header>
    </section>
  {/if}

  {#if started}
    <section class="wrapper special game-section">
      <div class="special">
          <Game data={grid} onLightPressed={toggleLight} />
          <p>Moves: {moves}</p>
      </div>
    </section>
  {/if}
</div>

<style>
  .full-height {
    min-height: 100vh;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .game-section {
    display: flex;
    justify-content: center;
  }
</style>