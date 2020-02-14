<script>

  export let theme = null;
  export let THEMES = null;
  export let isLoaded = false; // should never be true for SSR

  import DefaultTheme from "./themes/DefaultTheme.svelte";
  import CloudTheme from "./themes/CloudTheme.svelte";

</script>

{#if !isLoaded}
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