<script>

  let isLoaded = false;

  export let theme = null;
  export let THEMES = null;
  export let isMounted = false; // whether the parent component has been mounted

  $: if (isMounted) loadThemes();

  import DefaultTheme from "./themes/DefaultTheme.svelte";

  // dynamically imported components
  let CloudTheme;
  let PixelTheme;

  // we don't load until anything is mounted
  async function loadThemes() {
    let module = await import("./themes/CloudTheme.svelte");
    CloudTheme = module.default;

    module = await import("./themes/PixelTheme.svelte");
    PixelTheme = module.default;

    isLoaded = true;
  }


</script>

{#if !isMounted || !isLoaded}
  <DefaultTheme>
    <slot />
  </DefaultTheme>
{:else}
  {#if theme === THEMES.clouds}
    <CloudTheme>
      <slot />
    </CloudTheme>
  {:else if theme === THEMES.pixels}
    <PixelTheme>
      <slot />
    </PixelTheme>
  {:else }
    <DefaultTheme>
      <slot />
    </DefaultTheme>
  {/if}
{/if}