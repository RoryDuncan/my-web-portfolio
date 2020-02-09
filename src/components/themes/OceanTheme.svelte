<script>

  let canvas = null;

  import { onMount } from 'svelte';

  onMount(() => {
    window.document.body.classList.add("theme--ocean")
    const context = canvas.getContext("2d");

    return () => {
      window.document.body.classList.remove("theme--ocean");
    };
  });
</script>

<canvas bind:this={canvas}></canvas>
<slot />

<style>

  :global(.theme--ocean) {
    --primary-color: #000;
    --background-color: #00B1FB;
    --text-color: #124d66;
    --link-text-color: #000000;
    --accent-gray: transparent;
    --secondary-text-color: var(--text-color);
    --selected-nav-color: var(--primary-color);
  }

</style>