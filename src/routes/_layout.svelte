<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

	.container {

	}

  main {
		width: 100%;
		padding: 2em;
	}

	@media screen and (min-width: 56em) {
		.container {
			display: flex;
			justify-content: space-evenly;
			flex: 0 1 auto;
			max-width: 45em;
			margin: 0 auto;
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
