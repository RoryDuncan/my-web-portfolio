<script lang="ts">
  import "open-props/normalize.min.css";
  import "open-props/open-props.min.css";
  import "$lib/app/app.css";
  import favicon from "$lib/assets/favicon.svg";
  import GoogleWebFonts from "$lib/app/components/GoogleWebFonts.svelte";
  import { page } from "$app/state";
  import { createDebouncer } from "$lib/app/utils.js";

  let { children, data } = $props();

  let charRefs: Record<string, HTMLElement | undefined> = $state({});

  const nameChars = $derived(data.hero.name.split(""));
  let elementsToHighlight: Set<HTMLElement> = $state(new Set());

  const debouncer = createDebouncer(60);

  async function onMouseEnter(index: number, char: string) {
    debouncer.run(() => {
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
    });
  }

  function onMouseLeave() {
    debouncer.cancel();
    Object.values(charRefs).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.innerText = el.dataset.char ?? "/";
      }
    });
  }
</script>

<GoogleWebFonts />

<svelte:head>
  <title>meow.coffee</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
  {#snippet render_char(parts: string[], indexStart: number)}
    {#each parts as char, i}
      {@const roll = Math.random()}
      {@const index = indexStart + i}
      <code
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
        class:accent-3={roll >= 0.6 && roll < 0.7}>{char}</code
      >
    {/each}
  {/snippet}

  <div class="character-grid space-mono-regular" role="region" onmouseleave={onMouseLeave}>
    {@render render_char(data.hero.part1, 0)}

    <svelte:element
      this={page.url.pathname === "/" ? "h1" : "h5"}
      class="char-set share-tech-mono-regular text-lowercase"
    >
      {#each nameChars as char, i}
        <code
          role="region"
          class="char"
          onmouseenter={() => onMouseEnter(data.hero.part1.length + i, char)}>{char}</code
        >
      {/each}
    </svelte:element>

    {@render render_char(data.hero.part2, data.hero.part1.length + data.hero.name.length)}
  </div>

  <div class="page-content" data-sveltekit-noscroll>
    <div class="back">
      {#if page.url.pathname != "/"}
        <a href="/">back</a>
      {/if}
    </div>
    {@render children()}
  </div>
</div>

<style>
  .layout {
    padding: 0rem;
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

  .back {
    min-height: 2rem;
  }

  .page-content {
    padding: 2rem;
    background-color: var(--surface-1);
    border-top: 0.5rem solid var(--gray-10);
    z-index: 2;
    position: relative;
    min-height: max(55vh, 10rem);
  }

  .char {
    font-size: 4vw;
    aspect-ratio: 1/1;
    display: grid;
    place-content: center;
    transition: 0.2s ease-in-out transform;
    user-select: none;
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

  @media screen and (min-width: 72rem) {
    .layout {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
    }

    .character-grid {
      grid-template-columns: repeat(12, 1fr);
    }

    .char,
    .char-set .char {
      font-size: 1rem;
    }

    .page-content {
      border-left: 1px solid var(--gray-10);
      border-top: none;
    }
  }
</style>
