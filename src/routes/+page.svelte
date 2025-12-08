<script lang="ts">
  import type { PageData } from "./$types";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();

  let charRefs: Record<string, HTMLElement | undefined> = $state({});

  const nameChars = $derived(data.hero.name.split(""));
  let elementsToHighlight: Set<HTMLElement> = $state(new Set());

  let running = $state(true);
  let rafId: number | null = null;
  let animationStarted = $state(false);
  let lastRender = $state(0);
  const delay = 5000;
  const wait = (duration: number) =>
    new Promise((resolve) => {
      if (window) {
        window.setTimeout(resolve, duration);
      }
    });

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

  async function onMouseEnter(index: number, char: string) {
    const gridWidth = 16;
    const col = index % gridWidth;
    const row = Math.floor(index / gridWidth);
    const totalChars = Object.keys(charRefs).length;

    elementsToHighlight = new Set();

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
      el.innerText = char; //data.hero.realm[Math.floor(Math.random() * data.hero.realm.length)];
      // el.style.opacity = "0.5";
      // You can change their style, text, etc.
      // For example, let's change their text to a random character
      //   el.innerText = String.fromCharCode(100 + Math.floor(Math.random() * 26));
      //   el.innerText = data.hero.randomChar();
    });
  }

  function onMouseLeave() {
    Object.values(charRefs).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.innerText = el.dataset.char ?? "/";
      }
    });
  }
</script>

{#snippet render_char(parts: string[], indexStart: number)}
  {#each parts as char, i}
    {@const roll = Math.random()}
    {@const index = indexStart + i}
    <i
      role="region"
      data-char={char}
      class:dimmed={true}
      onmouseenter={() => onMouseEnter(index, char)}
      onmouseleave={onMouseLeave}
      bind:this={charRefs[`${index}`]}
      class:highlighted={elementsToHighlight.has(charRefs[index]!)}
      class="char"
      class:accent-1={roll >= 0.7}
      class:accent-2={roll >= 0.2 && roll < 0.6}
      class:accent-3={roll >= 0.6 && roll < 0.7}>{char}</i
    >
  {/each}
{/snippet}

<div class="character-grid space-mono-regular" role="region" onmouseleave={onMouseLeave}>
  {@render render_char(data.hero.part1, 0)}

  <h1 class="char-set space-mono-regular text-lowercase">
    {#each nameChars as char, i}
      <i
        role="region"
        class="char"
        onmouseenter={() => onMouseEnter(data.hero.part1.length + i, char)}>{char}</i
      >
    {/each}
  </h1>

  {@render render_char(data.hero.part2, data.hero.part1.length + data.hero.name.length)}
</div>

<div class="page-content">
  <h2>Hi</h2>

  <p>I'm rory. <br />I'm a specialized software engineer.</p>

  <p></p>
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
    border-top: 3px solid var(--text-2);
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

  .char-set {
    display: contents;
  }

  .char-set .char {
    font-size: max(4vw, 2rem);
    animation: 1s appear ease-in 0s;
    animation-fill-mode: forwards;
    color: var(--brand);
  }

  .char {
    color: var(--stone-2);
    transition: 0.5s ease-in-out opacity;
  }

  .dimmed {
    opacity: 0.1;
  }

  .char.highlighted {
    opacity: 0.5;
  }

  .accent-1 {
    color: var(--accent-color-1, --pink-4);
  }

  .accent-2 {
    color: var(--accent-color-2, --text-2);
  }
  .accent-3 {
    color: var(--accent-color-3, --yellow-3);
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
