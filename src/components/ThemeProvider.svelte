<script>

  let isLoaded = false;

  export let theme = null;
  export let THEMES = null;
  export let isMounted = false; // should never be true for SSR

  $: if (isMounted) loadThemes();

  import DefaultTheme from "./themes/DefaultTheme.svelte";

  // dynamically imported components
  let CloudTheme;


  async function loadThemes() {
    CloudTheme = await import("./themes/CloudTheme.svelte").default;
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
  {:else }
    <DefaultTheme>
      <slot />
    </DefaultTheme>
  {/if}
{/if}