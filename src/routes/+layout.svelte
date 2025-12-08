<script lang="ts">
  import "open-props/normalize.min.css";
  import "open-props/open-props.min.css";
  import favicon from "$lib/assets/favicon.svg";
  import GoogleWebFonts from "$lib/app/components/GoogleWebFonts.svelte";

  let { children } = $props();
</script>

<GoogleWebFonts />

<svelte:head>
  <title>meow.coffee</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="content">
  {@render children()}
</div>

<style>
  .content {
    padding: 0rem;
  }
</style>
