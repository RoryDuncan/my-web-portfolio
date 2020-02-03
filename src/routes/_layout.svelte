<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

	.container {

	}

  main {
		width: 100%;
    max-width: 40em;
		padding: 2em;
		border-top: 1px solid #b2b2b2;
	}

	@media screen and (min-width: 56em) {
		.container {
			display: flex;
			justify-content: space-evenly;
			flex: 0 1 auto;
		}

		main {
			max-width: var(--content-width);
			border-top: none;
		}
	}

</style>

<div class="container">

  <Nav {segment} />
  <main>
    <slot />
  </main>
</div>
