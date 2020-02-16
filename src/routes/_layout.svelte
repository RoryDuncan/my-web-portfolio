<script>
  import Nav from "../components/Nav.svelte";
  import ThemeSelect from "../components/ThemeSelect.svelte";

  export let segment;

</script>

<style>

  .container {
    display: block;
  }

  main {
    width: 100%;
    padding: 2em;
  }

  @media screen and (min-width: 56em) {
    .container {
      display: flex;
      justify-content: space-between;
      flex: 0 1 auto;
    }

    main {
      max-width: var(--content-width);
      border-top: none;
      padding: 10vh 0;
      margin: 0 auto;
    }
  }

</style>

<ThemeSelect>
  <div class="container">

    <Nav {segment} />
    <main>
      <slot />
    </main>
  </div>
</ThemeSelect>
