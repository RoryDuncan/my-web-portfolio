<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import ThemeProvider from "./ThemeProvider.svelte";

  export let theme = "none";
  let themeStore = null;
  let THEMES = null;
  let isMounted = false;

  let themeSelectOpen = false;
  let shouldLoadThemes = false;

  $: theme = themeStore !== null ? $themeStore : theme;

  function setTheme(value) {
    themeStore.set(value);
    themeSelectOpen = false;
  }

  onMount(async () => {
    const module = await import("../stores/theme.js");
    themeStore = module.theme;
    THEMES = module.THEMES;
    isMounted = true;

    const params = new URLSearchParams(window.location.search);
    if (params.has("theme")) {
      const paramTheme = THEMES[params.get("theme")] || null;
      if (paramTheme !== null) {
        shouldLoadThemes = true;
        setTheme(paramTheme);
      }
    }
  });
</script>

<ThemeProvider {theme} {THEMES} isMounted={isMounted && shouldLoadThemes}>
  <slot />
</ThemeProvider>

<footer class="theme-changer">
  {#if themeSelectOpen}
    <div
      class="theme-select-backdrop"
      on:click={() => (themeSelectOpen = false)}
      transition:fade={{ delay: 100, duration: 300 }}
    />
    <div class="theme-select" transition:fly={{ y: 300, duration: 300 }}>
      <h2>Theme Select</h2>
      <ul class="themes">
        <li>
          <button
            type="button"
            disabled={theme === THEMES.none}
            on:click={() => setTheme(THEMES.none)}
          >
            None
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={theme === THEMES.clouds}
            on:click={() => setTheme(THEMES.clouds)}
          >
            Clouds
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={theme === THEMES.pixels}
            on:click={() => setTheme(THEMES.pixels)}
          >
            Pixels
          </button>
        </li>
      </ul>
    </div>
  {:else}
    <button
      class="current-theme"
      type="button"
      on:click={() => (themeSelectOpen = shouldLoadThemes = true)}
    >
      Theme: {theme}
    </button>
  {/if}
</footer>

<style>
  .theme-changer {
    display: none;
    position: fixed;
    bottom: 0.5em;
    background-color: transparent;
    right: 1em;
  }

  @media (min-width: 1024px) {
    .theme-changer {
      display: block;
    }
  }

  .current-theme {
    border: 1px solid var(--link-text-color);
    color: var(--link-text-color);
    padding: 0.5em 1em;
    text-transform: capitalize;
  }

  .theme-select-backdrop {
    background-color: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(6px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .theme-select {
    font-size: 1.5em;
    padding: 2em 2em 10vh 2em;
    min-height: 20vh;
    position: fixed;
    right: 0.5em;
    bottom: 0;
    background-color: #fff;
    border: 1px solid #000;
    border-bottom: none;
  }

  .theme-select .themes button {
    margin: 0 auto 0.5em auto;
    display: block;
    width: 100%;
    background-color: #f2f2f2;
  }

  .themes {
    padding: 0 0;
    margin: 0 0 2em 0;
    list-style: none;
  }

  button {
    border: 1px solid transparent;
    background-color: transparent;
    color: #000;
    border: none;
    padding: 0.5em 1em;
    border-radius: 3px;
    cursor: pointer;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
</style>
