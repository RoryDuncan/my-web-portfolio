<script lang="ts">
  import { page } from "$app/state";
  import type { RouteId } from "$app/types";
  import type { Snippet } from "svelte";

  interface Props {
    routeId: RouteId;
    children: Snippet;
    fontSize?: string;
  }

  const { children, routeId, fontSize = undefined }: Props = $props();

  let el: "h1" | "h3" = $derived.by(() => {
    return routeId === page.route.id ? "h1" : "h3";
  });

  const fs = $derived.by(() => {
    if (fontSize) {
      return fontSize ?? null;
    } else {
      return el === "h1" ? null : "var(--font-size-4)";
    }
  });
</script>

<svelte:element this={el} class="page-title" style:font-size={fs}
  >{@render children()}</svelte:element
>

<style>
  .page-title {
    margin: 1rem 0;
  }
</style>
