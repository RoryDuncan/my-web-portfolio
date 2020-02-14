

<script>

  import { tweened } from 'svelte/motion';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const completeEvent = "complete";

  export let img;
  export let height; // the container height
  export let width; // the container width


  export let x = 0;
  export let delay = 0;
  export let duration = 30000;
  export let running = false;


  let y = tweened(0);
  let scale = 0.5;
  let rotation = 0;

  $: isFarLayer = img.height <= 300;
  $: layer = isFarLayer ? -1 : 1;
  $: scale = isFarLayer ? 0.75 : 0.5;
  $: top = img.height * -1;
  $: running ? start() : null;
  $: style = `top: ${top}px; transform: translate(${x}px, ${$y}px) scale(${scale}) rotate(${rotation}deg);`;


  function start() {
    setX();
    const baseDuration = 60000;
    duration = Math.round(baseDuration + Math.random() * (baseDuration / 4));

    if (isFarLayer) {
      duration *= 0.5;
    }

    const rotationRange = 3;
    rotation = Math.round((Math.random() * (rotationRange * 2)) - rotationRange);

    const target = height + (img.height * 2 * scale)
    // console.log({ x, top, target, delay, duration, height: img.height });

    y.set(target, { duration, delay, })
      .then(() => {
        reset();
        dispatch(completeEvent, img);
      });
  }

  function reset() {
    y.set(0, { duration: 0, delay: 0 }); // reset
    delay = 0;
    start();
  }


  function setX() {
    // we want clouds to spawn in bands ― averaging around 25% and 75% of the screen width
    const half = width / 2;

    const base = Math.random() >= 0.5 ? -img.width : half + img.width;

    x = base + Math.round(Math.random() * half) - (img.width / 2);

  }

</script>

<img class="cloud" src={img.src} alt={img.alt} {style} class:far={layer !== 1} />

<style>
  .cloud {
    position: fixed;
    top: -100%;
    z-index: 1;
    opacity: 1;
    mix-blend-mode: hard-light;
    user-select: none;

  }

  .far {
    z-index: -1;
  }

</style>