<script>
  import SocialLinks from "./SocialLinks.svelte";
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0.5em 1em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    flex: 1 0 auto;
    flex-wrap: wrap;
  }

  li {
    display: block;
  }


  .non-mobile {
    display: none;
  }

  .selected {
    color: var(--primary-color);
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    display: block;
    border-radius: 6px;
    margin-bottom: 0.5em;
  }

  a:hover {
    background-color: var(--accent-gray);
  }

  @media screen and (min-width: 56em) {
    nav {
      width: var(--sidebar-width);
      height: 100vh;
      padding: 10vh 1rem;
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
    }

    ul {
      display: block;
    }

    .mobile-only {
      display: none;
    }

    .non-mobile {
      display: block;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">intro</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li>
    <li>
      <a class:selected={segment === 'projects'} href="projects">projects</a>
    </li>
    <li class="mobile-only">
      <a class:selected={segment === 'links'} href="links">links</a>
    </li>
  </ul>

  <div class="non-mobile">
    <SocialLinks />
  </div>



</nav>
