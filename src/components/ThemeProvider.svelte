<script>

  export let theme = null;
  export let THEMES = null;
  export let isLoaded = false; // should never be true for SSR

  import DefaultTheme from "./themes/DefaultTheme.svelte";
  import OceanTheme from "./themes/OceanTheme.svelte";

</script>

{#if !isLoaded}
  <DefaultTheme>
    <slot />
  </DefaultTheme>
{:else}
  {#if theme === THEMES.ocean}
    <OceanTheme>
      <slot />
    </OceanTheme>
  {:else }
    <DefaultTheme>
      <slot />
    </DefaultTheme>
  {/if}
{/if}