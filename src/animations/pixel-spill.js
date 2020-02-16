import throttle from "./throttle.js";
import MouseVector from "./mouse-vector.js";

let factor = 80;
let backgroundColor = "#060606";

const colors = ["#000b0b", "#1b0202", "#0b0b0b", "#1b1b1b", "#000"];
let currentColor = colors[~~(Math.random() * colors.length)]
const updateColor = throttle(1000, () => {
  const previousColor = currentColor;
  while (previousColor === currentColor) {
    currentColor = colors[~~(Math.random() * colors.length)];
  }

});


let canvas = null;
let $ = null; // our primary canvas context
let frameID = null; // rafID
let offscreen = null;
let $offscreen = null;
const mouse = new MouseVector(10);

/**
 *
 */
export function start(_canvas, width, height) {

  backgroundColor = window.getComputedStyle(_canvas, null).getPropertyValue("--background-color");

  canvas = _canvas;
  $ = canvas.getContext("2d");
  offscreen = createOffscreenContext();
  $offscreen = offscreen.getContext("2d");

  // init mouse position
  mouse.normalize(width / 2, height / 2);

  // bind listeners
  document.body.addEventListener("mousemove", updateMouse);

  frameID = window.requestAnimationFrame(loop);
}

export function stop() {
  document.body.removeEventListener("mousemove", updateMouse);
  window.cancelAnimationFrame(frameID);

}

function loop() {
  frameID = requestAnimationFrame(loop);
  pixelationSpillEffect();
}

/**
 *
 * @param {Event} e
 */
function updateMouse(e) {
  mouse.setPrevious();
  updateColor();
  mouse.normalize(e.clientX, e.clientY);
}

function createOffscreenContext() {
  const offscreenCanvas = document.createElement("canvas");
  offscreenCanvas.width = window.innerWidth / factor;
  offscreenCanvas.height = window.innerHeight / factor;
  return offscreenCanvas;
}




function pixelationSpillEffect() {

  let color = currentColor;

  const width = window.innerWidth / factor;
  const height = window.innerHeight / factor;

  let w = offscreen.width = width;
  let h = offscreen.height = height;

  $offscreen.fillStyle = backgroundColor;
  $offscreen.fillRect(0, 0, w, h);
  $offscreen.drawImage(canvas, 0, 0, w, h);
  $offscreen.beginPath();
  $offscreen.moveTo(mouse.previous.x / factor, mouse.previous.y / factor);
  $offscreen.quadraticCurveTo(width / 2, height / 2, mouse.x / factor, mouse.y / factor);
  $offscreen.strokeStyle = color;
  $offscreen.stroke();
  $offscreen.closePath();

  $.imageSmoothingEnabled = false;
  $.drawImage(offscreen, 0, 0, window.innerWidth, window.innerHeight);

}