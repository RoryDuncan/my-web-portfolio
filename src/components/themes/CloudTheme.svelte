<script>

  import { start, stop } from "../../animations/clouds/sea-animation.js";
  import { loadImages } from "../../animations/clouds/cloud-loader.js";
  import { onMount } from 'svelte';
  import Cloud from "../Cloud.svelte";

  let canvas = null;
  let imagesLoaded = false;
  let cloudDensity = 2;
  let images = [];

  let height = 0;
  let width = 0;

  onMount(() => {

    width = window.innerWidth;
    height = window.innerHeight;

    window.document.body.classList.add("theme--ocean");


    maximizeCanvas();
    const context = canvas.getContext("2d");
    start(context);

    loadClouds();

    return () => {
      imagesLoaded = false;
      stop();
      window.document.body.classList.remove("theme--ocean");
    };
  });

  function maximizeCanvas() {
    canvas.width = width;
    canvas.height = height;

  }

  async function loadClouds() {
    images = await loadImages();

    // cloud desntiy is a multiplier of the number of clouds we load
    let i = cloudDensity - 1;
    while (i > 0) {
      images = images.concat(images);
      i--;
    }

    imagesLoaded = true;
  }
</script>

{#if imagesLoaded}
  <div class="clouds">
    {#each images as img, i}
      <Cloud {img} {height} {width} running={true} delay={i * 8000} />
    {/each}
  </div>
{:else}
  <div class="loading-clouds">Loading...</div>
{/if}


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

  canvas {
    margin: 0 0;
    padding: 0 0;
    display: block;
    outline: 1px solid #0f0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }


  .loading-clouds {
    position: fixed;
    bottom: 5vh;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
    color: #000;
  }
</style>