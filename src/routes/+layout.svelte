<script lang="ts">
  import "open-props/normalize.min.css";
  import "open-props/open-props.min.css";
  import "$lib/app/app.css";
  import favicon from "$lib/assets/favicon.svg";
  import GoogleWebFonts from "$lib/app/components/GoogleWebFonts.svelte";
  import { page } from "$app/state";
  import { createDebouncer } from "$lib/app/utils.js";
  import { fly } from "svelte/transition";
  import { circInOut } from "svelte/easing";
  import { replaceState } from "$app/navigation";
  import { dev } from "$app/environment";

  let { children, data } = $props();

  let charRefs: Record<string, HTMLElement | undefined> = $state({});

  const nameChars = $derived(data.hero.name.split(""));
  let elementsToHighlight: Set<HTMLElement> = $state(new Set());

  const debouncer = createDebouncer(60);

  let characterGridRef = $state<HTMLElement>(null!);
  function onCharacterGridMove(event: MouseEvent) {
    if (characterGridRef instanceof HTMLElement) {
      const rect = characterGridRef.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      characterGridRef.style.setProperty("--x", `${(x / rect.width) * 100}%`);
      characterGridRef.style.setProperty("--y", `${(y / rect.height) * 100}%`);
    }
  }
</script>

<GoogleWebFonts />

<svelte:head>
  <title>meow.coffee</title>
  {#if !dev}
    <script src="https://app.rybbit.io/api/script.js" data-site-id="718785d324aa" defer></script>
  {/if}
</svelte:head>

<div class="layout">
  {#snippet render_char(parts: string[], indexStart: number)}
    {#each parts as char, i}
      {@const roll = Math.random()}
      {@const index = indexStart + i}
      <code
        role="region"
        data-char={char}
        class:dimmed={false}
        bind:this={charRefs[`${index}`]}
        class:highlighted={elementsToHighlight.has(charRefs[index]!)}
        class="char"
        class:accent-1={roll >= 0.7}
        class:accent-2={roll >= 0.2 && roll < 0.6}
        class:accent-3={roll >= 0.6 && roll < 0.7}>{char}</code
      >
    {/each}
  {/snippet}

  <div
    class="character-grid space-mono-regular"
    bind:this={characterGridRef}
    onmousemove={onCharacterGridMove}
    role="region"
  >
    {@render render_char(data.hero.realm, 0)}
  </div>

  <div class="page-content" data-sveltekit-noscroll>
    <div class="breadcrumbs">
      <a class="breadcrumb" href="/" title="home">
        <img
          class:mode-inverted={true}
          loading="eager"
          fetchpriority="high"
          src="/images/favicon-96x96.png"
          alt="home"
          style:height="2rem"
        />
      </a>
      {#if page.url.pathname != "/"}
        {#if page.route.id === "/blog/[slug]"}
          <a class="breadcrumb" href="/blog">blog</a>
        {/if}
      {/if}
    </div>
    <div class="d-flex-column">
      <div class="mb-2">
        {@render children()}
      </div>

      {#if page.state.subview !== undefined}
        <div class="inline-page view" in:fly={{ y: 200, easing: circInOut }}>
          {#if page.state.subview === "/personal/about"}
            {#await import(`./personal/about/+page.svelte`)}
              <span role="none" class="dinkus">∙∙∙</span>
            {:then { default: SubViewComponent }}
              <SubViewComponent {data} />
            {/await}
          {:else if page.state.subview === "/work/about"}
            {#await import(`./work/about/+page.svelte`)}
              <span role="none" class="dinkus">∙∙∙</span>
            {:then { default: SubViewComponent }}
              <SubViewComponent {data} />
            {/await}
          {:else if page.state.subview === "/blog"}
            {#await import(`./blog/+page.svelte`)}
              <span role="none" class="dinkus">∙∙∙</span>
            {:then { default: SubViewComponent }}
              <SubViewComponent {data} />
            {/await}
          {/if}
        </div>
        <div class="page-actions view">
          {#if page.route.id !== null && page.route.id !== page.state.subview}
            <button
              class="action close"
              onclick={() =>
                replaceState(page.route.id ?? "/", {
                  subview: undefined,
                })}
              title="Close panel"
            >
              <img src="/icons/top_panel_close.svg" alt="close panel" />
            </button>

            <a href={page.state.subview} class="action" title="open panel as full page">
              <img src="/icons/arrow_outward.svg" alt="open panel as full page" />
            </a>
          {/if}
        </div>
      {/if}
      <div class="view mt-auto">
        <h5 class="visually-hidden">Socials</h5>
        <div class="links">
          <a href="https://github.com/RoryDuncan" target="_blank" rel="noopener noreferrer"
            >github</a
          >
          <a
            href="https://www.linkedin.com/in/rory-duncan-53288b79/"
            target="_blank"
            rel="noopener noreferrer">linkedin</a
          >
          <a href="https://letterboxd.com/rorymeowcoffee/" target="_blank" rel="noopener noreferrer"
            >letterboxd</a
          >
          <a
            href="https://www.instagram.com/rory.meow.coffee/"
            target="_blank"
            rel="noopener noreferrer">instagram</a
          >
        </div>
      </div>
    </div>
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
    height: calc(100vh - 6rem);
    overflow: hidden;
    display: grid;
    font-size: 1rem;
    grid-template-columns: repeat(16, calc(100vw / 15));
    gap: 2px;
    align-items: center;
  }
  .character-grid {
    --x: 50%;
    --y: 50%;
    --radius: 12rem;
    --color: var(--gray-2);

    background: radial-gradient(
      circle var(--radius) at var(--x) var(--y),
      var(--color),
      transparent
    );
  }

  @media (prefers-color-scheme: dark) {
    .character-grid {
      --color: var(--gray-10);
    }
  }

  .breadcrumbs {
    padding: 0.75rem 1rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--surface-border-color);
    margin: -2rem -2rem 1rem -2rem;
  }

  .breadcrumbs .breadcrumb {
    color: var(--brand);
  }

  .page-content {
    padding: 2rem;
    background-color: var(--surface-1);
    border-top: 1px solid var(--surface-border-color);
    box-shadow: 0 -1rem 2rem -1rem rgba(0, 0, 0, 0.5);
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
    background: var(--surface-1);
  }

  .char {
    color: var(--stone-2);
    transition: 0.5s ease-in-out opacity;
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

  .d-flex-column {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .view {
    padding: 1rem 2rem;
    margin: 0rem -2rem 0 -2rem;
    border-top: 1px solid var(--surface-border-color);
  }

  .inline-page {
    margin-top: 2rem;
    flex-grow: 1;
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
      grid-template-columns: 1fr 1fr;
    }

    .character-grid {
      height: 100vh;
      grid-template-columns: repeat(12, 1fr);
    }

    .char {
      font-size: 1rem;
    }

    .page-content {
      border-left: 1px solid var(--surface-border-color);
      border-top: none;
      box-shadow: none;
    }
  }

  :global(.sep) {
    background-color: var(--gray-10);
    height: 1px;
    margin-block: var(--size-fluid-3);
  }

  .page-actions {
    padding: 0.5rem 1rem;
    margin-top: auto;
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    bottom: 0px;
    background: var(--surface-1);
  }

  .page-actions .action {
    padding: 0.5rem;
    aspect-ratio: 1;
    cursor: pointer;
    background: var(--surface-1);
    border-radius: 6px;
  }

  .page-actions .action:hover {
    background: var(--surface-2);
  }

  .close {
    all: unset;
    color: var(--link-visited);
    cursor: pointer;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    .mode-inverted {
      filter: invert(1);
    }
  }
</style>
