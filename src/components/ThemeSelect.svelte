<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import ThemeProvider from "./ThemeProvider.svelte"

  let theme = null;
  let THEMES = null;

  let themeSelectOpen = false;
  let currentTheme = "none";

  $: currentTheme = $theme ? $theme : currentTheme;

  function setTheme(value) {
    theme.set(value);
    // themeSelectOpen = false;
  }

  onMount(async () => {
    const module = await import("../stores/theme.js");
    theme = module.theme;
    THEMES = module.THEMES;
  });
</script>

<style>

  .theme-changer {
    position: fixed;
    bottom: 0.5em;
    background-color: var(--background-color);
    right: 1em;
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


<ThemeProvider theme={$theme} {THEMES} isLoaded={THEMES !== null}>
  <slot />
</ThemeProvider>

<footer class="theme-changer">
  {#if themeSelectOpen}
    <div
      class="theme-select-backdrop"
      on:click={() => (themeSelectOpen = false)} transition:fade={{ delay: 100, duration: 300 }} />
    <div class="theme-select" transition:fade={{ duration: 200 }}>
      <h2>Theme Select</h2>
      <ul class="themes">
        <li>
          <button
            type="button"
            disabled={currentTheme === THEMES.none}
            on:click={() => setTheme(THEMES.none)}>
            None
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={currentTheme === THEMES.ocean}
            on:click={() => setTheme(THEMES.ocean)}>
            Ocean
          </button>
        </li>
        <li />
      </ul>

    </div>
  {:else}
    <button class="current-theme" type="button" on:click={() => (themeSelectOpen = true)}>
      Theme: {currentTheme}
    </button>
  {/if}
</footer>

