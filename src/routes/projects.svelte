<script>
  const rel = "noopener";
  const target = "_blank";
</script>

<svelte:head>
  <title>projects.meow.coffee</title>
  <meta
    name="description"
    content="Learn about recent notable projects Rory has worked on."
  />
</svelte:head>

<h1>Projects</h1>

<p>
  Below are a list of my recent notable projects.
  <br />
  Also, check out my
  <a href="https://github.com/RoryDuncan" {rel} {target}>github</a>.
</p>

<ol>
  <li class="project">
    <h3>
      <a href="https://github.com/fuse-fonts" {rel} {target}>Fuse Fonts</a>
    </h3>
    <p>
      An Adobe Photoshop plugin and its supporting installer, demo, and website.
      Built with Svelte/Sapper, nodejs, Electron, and Firebase.
      <a class="demo-link" href="https://demo.fusefonts.com" {rel} {target}>
        See the demo
      </a>
    </p>
  </li>

  <li class="project">
    <h3>
      <a
        href="https://github.com/RoryDuncan/dota2-viewing-party-app"
        {rel}
        {target}
      >
        Dota 2 Viewing Party App
      </a>
    </h3>
    <p>
      An oddly specific SPA I built for myself when I hosted a viewing party for
      Dota 2's The International. The idea is that because of the websocket
      nature of Firebase's RealTime Database you can control multiple "Screens"
      or web pages from a single page. Built with Svelte 2 and Firebase.
      <a
        class="demo-link"
        href="https://dota2-viewing-party-app.firebaseapp.com/"
        {rel}
        {target}
      >
        See the demo
      </a>
    </p>
  </li>

  <li class="project">
    <h3>
      <a href="https://github.com/RoryDuncan/lmytfy" {rel} {target}>LMYTFY</a>
    </h3>
    <p>
      A challenge to build a lmgtfy-like site within 40 minutes. Built with
      Svelte, Firebase, and La Croix.
      <a class="demo-link" href="https://lmytfy.com" {rel} {target}>
        See it at lmytfy.com
      </a>
    </p>
  </li>

  <li class="project">
    <h3>
      <a href="https://github.com/RoryDuncan/suki.js" {rel} {target}>Suki.js</a>
    </h3>
    <p>
      A personal endeavor to create a modular and extensible ES7 game framework,
      with an easy-to-use API.
      <a
        class="demo-link"
        href="https://github.com/RoryDuncan/suki.js/tree/master/examples"
        {rel}
        {target}
      >
        See Code Samples here
      </a>
      or
      <a
        {rel}
        {target}
        href="https://github.com/RoryDuncan/suki.js/wiki/Getting-Started"
      >
        the suki.js Wiki
      </a>
    </p>
  </li>
</ol>

<style>
  ol {
    margin: 0 0;
    padding: 0 0;
    list-style: none;
  }

  a {
    color: var(--link-text-color);
    display: inline-block;
    padding: 0 0.25em;
    margin-left: -0.17em;
    background-color: var(--accent-gray);
    border-radius: 6px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .project {
    padding: 1em 0em 0em 0em;
    margin-bottom: 1em;
  }

  .project p {
    margin-top: 0.5em;
    margin-bottom: 1.5em;
  }

  .project h3 {
    margin: 0 0;
    font-weight: 700;
  }

  .project .demo-link::after {
    content: "↗";
    font-size: 0.7em;
    margin-left: 0.5rem;
    color: var(--muted-color);
    display: inline-block;
  }
</style>
