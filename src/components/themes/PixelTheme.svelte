<script>

  import { start, stop } from "../../animations/pixel-spill.js";
  import { onMount } from 'svelte';

  let canvas = null;
  let height = 0;
  let width = 0;

  onMount(() => {

    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;

    window.document.body.classList.add("theme--pixels");
    start(canvas, width, height);

    return () => {
      window.document.body.classList.remove("theme--pixels");
      stop();
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
    --link-text-color: #faa;
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