<script lang="ts">
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.article.metadata?.title}</title>
  {#if data.article.metadata?.published === false}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

<div class="article-content">
  {@html data.article.body}
</div>

<style>
  .article-content {
    min-height: 55vh;
  }
  .article-content :global(h1) {
    font-size: var(--font-size-6);
  }
</style>
