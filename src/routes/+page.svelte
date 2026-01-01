<script lang="ts">
  import type { PageData, RouteId } from "./$types";
  import { pushState } from "$app/navigation";
  import PageTitle from "$lib/app/components/PageTitle.svelte";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();

  //   const { Components } = data;

  let displayContentFor: "work" | "personal" | "none" = $state("none");
</script>

<div class="d-flex">
  <div class="lefty">
    <h2>Hi</h2>

    <PageTitle fontSize={"var(--font-size-3)"} routeId={"/" satisfies RouteId}>I'm rory</PageTitle>

    <p>
      <span role="none" class="dinkus">∙∙∙</span>
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

    <p class="mt-1" style:color={"var(--gray-6)"}>
      Lately, I assist teams to embrace better frontends for faster velocity.
    </p>

    <p>
      <span role="none" class="dinkus">∙∙∙</span>
      If curious,
      <a
        href="/personal/about"
        onclick={(e) => {
          e.preventDefault();
          pushState("/personal/about", {
            subview: "/personal/about",
          });
        }}>learn about me</a
      >.
    </p>
  </div>
  <div class="pfp">
    <img loading="eager" src="/images/me.jpg" alt="Rory, smiling" />
  </div>
</div>

<style>
  .dinkus {
    display: block;
    color: var(--gray-7);
    margin: 0.5rem 0rem;
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
    border: 6px solid var(--gray-10);
    object-fit: cover;
    overflow: hidden;
    position: sticky;
    top: 1rem;
  }
</style>
