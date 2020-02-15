<script>

  import { loadImages } from "../../animations/cloud-loader.js";
  import { onMount } from 'svelte';
  import Cloud from "../Cloud.svelte";

  let imagesLoaded = false;
  let cloudDensity = 2;
  let images = [];

  let height = 0;
  let width = 0;

  onMount(() => {

    width = window.innerWidth;
    height = window.innerHeight;

    window.document.body.classList.add("theme--ocean");
    loadClouds();

    return () => {
      imagesLoaded = false;
      window.document.body.classList.remove("theme--ocean");
    };
  });


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