<script>
  export let showFullLink = false;
  let showInstagramMessage = false;


  export const email = "rory@meow.coffee";
  export const github = "github.com/RoryDuncan";
  export const linkedin = "linkedin.com/in/rory-duncan-53288b79";
  export const instagram = "instagram.com/robustrory"
  const rel = "noopener";
  const target = "_blank";
</script>
<style>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--secondary-text-color);
    text-decoration: none;
    display: inline-block;
    padding: 0.5em 1em;
  }

  .external-link-icon {
    margin-left: -1em;
  }

  a:hover::after,
  .external-link-icon::after {
    content: "↗";
    font-size: 0.7em;
    line-height: 1em;
    margin-left: 0.5rem;
    color: var(--muted-text);
    display: inline-block;
  }

</style>


<ul>
  <li>
    <a href="mailto:{email}" class:external-link-icon={showFullLink} {target} {rel}>
      {showFullLink ? email : "email"}
    </a>
  </li>
  <li>
    <a href="https://{github}" class:external-link-icon={showFullLink} {target} {rel}>
      {showFullLink ? github : "github"}
    </a>
  </li>
  <li>
    <a
      href="https://www.{linkedin}" class:external-link-icon={showFullLink} {target} {rel}>
      {showFullLink ? linkedin : "linkedin"}
    </a>
  </li>
  <li>
    <a
      href="https://www.{instagram}" class:external-link-icon={showFullLink} {target} {rel}
      on:mouseover="{() => showInstagramMessage = true}"
      on:mouseout="{() => showInstagramMessage = false}"
      >
      {showInstagramMessage ? "AKA cat diary" : showFullLink ? instagram : "instagram"}
    </a>
  </li>
</ul>