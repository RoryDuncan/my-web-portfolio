<script>

  // import { loadImages } from "../../animations/cloud-loader.js";
  import { onMount } from 'svelte';

  let canvas = null;
  let height = 0;
  let width = 0;

  onMount(() => {

    width = window.innerWidth;
    height = window.innerHeight;

    window.document.body.classList.add("theme--pixels");

    return () => {
      window.document.body.classList.remove("theme--pixels");
    };
  });

</script>


<canvas bind:this={canvas}></canvas>
<slot />

<style>

  :global(.theme--pixels) {
    --primary-color: #666;
    --background-color: #222;
    --text-color: #eee;
    --link-text-color: #fff;
    --accent-gray: transparent;
    --secondary-text-color: var(--text-color);
    --selected-nav-color: var(--primary-color);
  }

  canvas {
    position: fixed;
    display: block;
    left:0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-color: transparent;
  }
</style>