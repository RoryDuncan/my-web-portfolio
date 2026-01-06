<script lang="ts">
  import type { PageData, RouteId } from "./$types";
  import { pushState } from "$app/navigation";
  import PageTitle from "$lib/app/components/PageTitle.svelte";
  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
</script>

<div class="d-flex">
  <div class="lefty">
    <h2>Hi</h2>

    <PageTitle fontSize={"var(--font-size-3)"} routeId={"/" satisfies RouteId}>I'm rory</PageTitle>

    <span role="none" class="dinkus">∙∙∙</span>
    <p>
      I'm sometimes a
      <a
        href="/work/about"
        onclick={async (e) => {
          e.preventDefault();
          pushState("/work/about", {
            subview: "/work/about",
          });
        }}>specialized software engineer</a
      >.
    </p>

    <span role="none" class="dinkus">∙∙∙</span>
    <p>
      If feeling personal,
      <a
        href="/personal/about"
        onclick={(e) => {
          e.preventDefault();
          pushState("/personal/about", {
            subview: "/personal/about",
          });
        }}>read about me</a
      >.
    </p>
    {#if data.hasPublishedArticles}
      <p>
        I have a <a
          onclick={async (e) => {
            e.preventDefault();
            pushState("/blog", {
              subview: "/blog",
            });
          }}
          href="/blog">blog</a
        >.
      </p>
    {/if}
  </div>
  <div class="pfp">
    <img loading="eager" src="/images/me.jpg" alt="Rory, smiling" />
  </div>
</div>

<style>
  .dinkus {
    display: block;
    color: var(--gray-7);
    margin: 1rem 0rem;
    pointer-events: none;
    user-select: none;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .pfp {
    width: 200px;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    border: 1px solid var(--surface-border-color);
    object-fit: cover;
    overflow: hidden;
    position: sticky;
    top: 1rem;
  }
</style>
