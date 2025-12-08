<script lang="ts">
  import type { PageData } from "./$types";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();

  let charRefs: Record<string, HTMLElement | undefined> = $state({});

  const nameChars = data.hero.name.split("");
</script>

{#snippet render_char(parts: string[], indexStart: number)}
  {#each parts as char, i}
    {@const roll = Math.random()}
    <i
      bind:this={charRefs[`${indexStart + i}`]}
      class="char"
      class:accent-1={roll >= 0.7}
      class:accent-2={roll >= 0.2 && roll < 0.6}
      class:accent-3={roll >= 0.6 && roll < 0.7}>{char}</i
    >
  {/each}
{/snippet}

<div class="character-grid noto-sans-mono-400">
  {@render render_char(data.hero.part1, 0)}

  <h1 class="char-set noto-sans-mono-400 text-uppercase">
    {#each nameChars as char}
      <i class="char">{char}</i>
    {/each}
  </h1>

  {@render render_char(data.hero.part2, data.hero.part1.length + data.hero.name.length)}
</div>

<div class="page-content">
  <p class="noto-sans-400">
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
  </p>
</div>

<style>
  i {
    font-style: normal;
  }

  .character-grid {
    position: sticky;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    display: grid;
    font-size: 1rem;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    align-items: center;
    background: var(--slate-11);
  }

  .page-content {
    padding: 2rem;
    background-color: var(--surface-1);
    border-top: 1px solid var(--pink-6);
    z-index: 2;
    position: relative;
    min-height: 50vh;
  }

  .char {
    font-size: 4vw;
    aspect-ratio: 1/1;
    display: grid;
    place-content: center;
    transition: 0.2s ease-in-out transform;
  }

  :where(:not(.char-set)) .char:hover {
    /* todo */
    /* transform: rotate(30deg); */
  }

  .char-set {
    display: contents;
    opacity: 0;
  }

  .char-set .char {
    opacity: 0;
    font-size: 2.5vw;
    animation: 2s appear ease-in 2s;
    animation-fill-mode: forwards;
    color: var(--choco-3);
  }

  .char {
    color: var(--stone-2);
  }

  .accent-1 {
    color: var(--pink-4);
  }

  .accent-2 {
    color: var(--text-2);
  }
  .accent-3 {
    color: var(--yellow-3);
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
