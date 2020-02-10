import { tweened } from 'svelte/motion';

let $ = null;
let rafID = null;

/** Begins the animation loop
 *
 */
function start(context) {
  $ = context;
}

/**
 *
 */
function tick(time) {

  rafID = requestAnimationFrame(tick);
}

/**
 *
 */
function step() {}

/**
 *
 */
function render() {}

/** Ends the animation loop
 *
 */
function stop() {

}