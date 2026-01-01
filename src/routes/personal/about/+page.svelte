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

<p class="mb-2">
  I have lived a few places on the west coast. I currently live in Northern California; a short walk
  from a beautiful park. A detail which is important to me.
</p>
<p>
  Ultimately, I'm probably a partial sum of my interests—that or you can extrapolate from them—so I
  have listed them below.
</p>

<ul class="mb-2">
  <li>I like to build software</li>
  <li>I like to read and write poetry</li>
  <li>I like to watch <i>films</i></li>
  <li>I like listening to newly released albums</li>
  <li>I like to gather and yap</li>
  <li>I like to build toy projects</li>
  <li>I like to make cocktails and mocktails</li>
  <li>I like design and the act of designing</li>
  <li>I weep, because I used em-dashes before AI</li>
</ul>
