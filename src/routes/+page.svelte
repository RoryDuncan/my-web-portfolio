<script lang="ts">
  import type { PageData } from "./$types";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();

  let charRefs: Record<string, HTMLElement | undefined> = $state({});

  const nameChars = $derived(data.hero.name.split(""));

  let running = $state(true);
  let rafId: number | null = null;
  let lastRender = $state(0);
  const delay = 5000;

  function swapChars() {
    const keys = Object.keys(charRefs);
    if (keys.length > 1) {
      const randomIndex1 = Math.floor(Math.random() * keys.length);
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * keys.length);
      } while (randomIndex1 === randomIndex2);

      const key1 = keys[randomIndex1];
      const key2 = keys[randomIndex2];

      const el1 = charRefs[key1];
      const el2 = charRefs[key2];

      if (el1 && el2) {
        const [text1, text2] = [el1.innerText, el2.innerText];
        el2.innerText = text1;
        el2.dataset.char = text1;
        el1.innerText = text2;
        el1.dataset.char = text2;
      }
    }
  }

  function render(runTime: DOMHighResTimeStamp) {
    const delta = runTime - lastRender;

    if (delta > 100) {
      swapChars();
      lastRender = runTime;
    }

    if (running) {
      rafId = window.requestAnimationFrame(render);
    } else if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  }

  function onMouseEnter(index: number, char: string) {
    const gridWidth = 16;
    const col = index % gridWidth;
    const row = Math.floor(index / gridWidth);
    const totalChars = Object.keys(charRefs).length;

    const elementsToHighlight = new Set<HTMLElement>();

    // Get column elements
    for (let i = col; i < totalChars; i += gridWidth) {
      const el = charRefs[`${i}`];
      if (el) {
        elementsToHighlight.add(el);
      }
    }

    // Get row elements
    const rowStart = row * gridWidth;
    for (let i = rowStart; i < rowStart + gridWidth; i++) {
      const el = charRefs[`${i}`];
      if (el) {
        elementsToHighlight.add(el);
      }
    }

    // Example of what you can do with the elements:
    elementsToHighlight.forEach((el) => {
      window.requestAnimationFrame(() => {
        el.innerText = data.hero.realm[Math.floor(Math.random() * data.hero.realm.length)];
        el.style.opacity = "0.5";
      });
      // You can change their style, text, etc.
      // For example, let's change their text to a random character
      //   el.innerText = String.fromCharCode(100 + Math.floor(Math.random() * 26));
      //   el.innerText = data.hero.randomChar();
    });
  }

  function onMouseLeave(index: number) {
    Object.values(charRefs).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.innerText = el.dataset.char ?? "/";
        el.style.opacity = "0.1";
      }
    });
  }

  $effect(() => {
    window.setTimeout(() => {
      lastRender = performance.now();
      window.requestAnimationFrame(render);
    }, delay);
  });
</script>

{#snippet render_char(parts: string[], indexStart: number)}
  {#each parts as char, i}
    {@const roll = Math.random()}
    <i
      role="region"
      data-char={char}
      onmouseenter={() => onMouseEnter(indexStart + i, char)}
      onmouseleave={() => onMouseLeave(indexStart + i)}
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
    animation: 4s appear ease-in 0s;
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
