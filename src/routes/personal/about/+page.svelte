<script lang="ts">
  import PageTitle from "$lib/app/components/PageTitle.svelte";
  import type { PageData, RouteId } from "./$types";

  interface Props {
    data: PageData;
    asSubView?: boolean;
  }
  let { data, asSubView = false }: Props = $props();
</script>

<PageTitle routeId={"/personal/about" satisfies RouteId}>About Me</PageTitle>

<p>Some of my interests</p>

<ul class="mb-2">
  <li>I like to read poetry</li>
  <li>I like to watch <i>films</i></li>
  <li>I like listening to newly released albums</li>
  <li>I like to gather and yap</li>
  <li>I like to build toy projects</li>
</ul>
