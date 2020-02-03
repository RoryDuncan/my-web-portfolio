<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .connect-list {
    white-space: nowrap;
    overflow: scroll;
  }

  .connect-list a {
    color: #aaa;
    width: 10em;
    display: inline-block;
  }

  .connect-list a:hover::after {
    content: "↗";
    font-size: 0.7em;
    margin-left: 0.5rem;
    color: #bbb;
    display: inline-block;
  }

  .selected {
    color: var(--primary-color);
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    display: block;
    border-radius: 6px;
  }

  a:hover {
    background-color: var(--accent-gray);
  }

  @media screen and (min-width: 56em) {
    nav {
      width: var(--sidebar-width);
      height: 100vh;
      position: sticky;
      top: 0;
      padding: 3em 0;
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
    }

    li {
      float: none;
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
      <a class:selected={segment === 'projects'} href="projects">projects</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
  </ul>

  <ul class="connect-list">
    <li>
      <a href="mailto:rory@meow.coffee" target="_blank">
        email
        <!-- rory@meow.coffee -->
      </a>
    </li>
    <li>
      <a href="https://github.com/RoryDuncan" target="_blank">
        <!-- github.com/roryduncan -->
        github
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/rory-duncan-53288b79"
        target="_blank">
        linkedin
      </a>
    </li>
  </ul>


</nav>
