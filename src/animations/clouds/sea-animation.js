
let $ = null;
let rafID = null;


/** Begins the animation loop
 *
 */
export async function start(context, width, height) {
  $ = context;

  // rafID = requestAnimationFrame(tick);
}

/** Ends the animation loop
 *
 */
export function stop() {
  if (rafID !== null) {

    clouds.forEach( cloud => cloud.unsubscribe());
    cancelAnimationFrame(rafID);
    rafID = null;

  }
}

/**
 *
 */
let lastTick = 0;
function tick(time) {
  const delta = time - lastTick;
  step(delta);
  if (delta >= 16) {
    render(delta);
    rafID = requestAnimationFrame(tick);
  }

}

/**
 *
 */
function step(delta) {

}

/**
 *
 */
function render(delta) {

}
