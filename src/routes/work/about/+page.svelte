<script lang="ts">
  import PageTitle from "$lib/app/components/PageTitle.svelte";
  import type { PageData, RouteId } from "./$types";

  interface Props {
    data: PageData;
    asSubView?: boolean;
  }
  let { data, asSubView = false }: Props = $props();
</script>

<PageTitle routeId={"/work/about" satisfies RouteId}>My Roles</PageTitle>

<p class="mb-2">
  I've worked in software engineering for about {new Date().getFullYear() - 2012} years.
</p>
<p class="mb-2">
  Before software engineering I would do ratty graphic design for bands and weird brands on myspace
  and the wider internet.
</p>

<p class="mb-2">
  I've contributed to open-source, built and decommisioned many side projects, and helped local
  companies utilize technology better.
</p>

<p>Some role highlights:</p>
<ul class="mt-1 mb-2 unstyled">
  <li>
    Front-end architect <br />—setting up cross-project tooling, patterns, design systems, and
    layered architectures
  </li>
  <li>
    "react expert"<br />—Coming into projects late to cleanup the messes of undisplined teams
  </li>
  <li>
    Team Lead<br />—organizing projects, dependencies, people, and technology
  </li>
  <li>
    The generic senior software engineer<br />—implementing things across "the stack" with muddying
    levels of responsibilities
  </li>
  <li>Director-level<br />—handling start-up needs by wearing every hat</li>
  <li>Client-support<br />—Handling content and UI changes at the whim of clients</li>
</ul>

<style>
  .unstyled {
    margin-left: 0;
    padding-left: 1em;
    list-style-type: circle;
  }

  .unstyled li {
    margin-bottom: 0.75rem;
  }
</style>
