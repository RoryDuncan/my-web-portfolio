<script lang="ts">
  import type { PageData } from "./$types";
  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();
</script>

<h2>Hi</h2>

<span role="none" class="dinkus">∙∙∙</span>

<h3 style:font-size="var(--font-size-3)">I'm rory</h3>

<span role="none" class="dinkus">∙∙∙</span>

<p>My best work is as a <a href="/work/about">specialized software engineer</a>.</p>
<p>
  I enjoy <a href="/rory/about">a few hobbies</a> outside of work.
</p>

<style>
  mark {
    background-color: var(--choco-3);
  }
  mark:hover {
    background-color: var(--brand);
  }

  .dinkus {
    display: block;
    color: var(--indigo-11);
    margin: 1rem 0.5rem;
    pointer-events: none;
    user-select: none;
  }
</style>
