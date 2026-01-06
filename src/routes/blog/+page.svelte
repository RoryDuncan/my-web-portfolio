<script lang="ts">
  import { dev } from "$app/environment";
  import type { Article, FrontMatterMetaData } from "$lib/server/articles";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<h1 class="page-title">Blog</h1>
<h2 class="visually-hidden">Posts</h2>

{#snippet articleLink(article: Article)}
  <li>
    <article class="article">
      {#if dev && article.published === false}
        <code>draft</code>
      {/if}
      <a href={`/blog/${article.slug}`}>
        <h2 class="title">{article.title}</h2>
      </a>
      <div class="date">{article.date}</div>
    </article>
  </li>
{/snippet}
<nav>
  <ul class="unstyled">
    {#if data.articles.filter((f) => f.published === true).length === 0}
      <li>No entries published yet. Check back later.</li>
    {/if}
    {#each data.articles as article}
      {#if article.published === false}
        {#if dev}
          {@render articleLink(article)}
        {/if}
      {:else}
        {@render articleLink(article)}
      {/if}
    {/each}
  </ul>
</nav>

<style>
  .unstyled {
    margin-left: 0;
    padding-left: 0em;
    list-style-type: none;
  }

  .unstyled li {
    padding: 0;
  }
  .article {
    padding: 1rem 0;
  }

  .article .title {
    font-size: var(--font-size-2);
  }
</style>
