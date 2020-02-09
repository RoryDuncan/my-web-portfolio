<script>

  const cloudColor = "#EEECEC";

  import { onMount } from 'svelte';

  onMount(() => {
    window.document.body.classList.add("theme--ocean")
    return () => window.document.body.classList.remove("theme--ocean");
  });
</script>


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