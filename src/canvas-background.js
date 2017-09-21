
let canvas = document.getElementById("bg-layer");

const $ = canvas.getContext("2d");
const gridSize = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const mouse = {
  x: 0,
  y: 0,
};

const renderBlip = (x, y) => {
  let size = gridSize;
  let halfSize = size / 2;
  $.fillRect(x - halfSize, y - halfSize, halfSize, halfSize);
};

const renderBlipGroup = (x, y) => {
  $.fillStyle = "#bbb";
  renderBlip(mouse.x, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x - gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x + gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y + gridSize);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y - gridSize);
};

const normalizeMouse = (x, y) => {
  let _x = Math.round(x / gridSize) * gridSize;
  let _y = Math.round(y / gridSize) * gridSize;
  return [+_x, +_y];
};

// prevent right clicking.
canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})

let page = "blip-grid";
const pageEffects = {
  
  "blip-grid": (mouse) => {
    renderBlipGroup(mouse.x, mouse.y);  
  },
  
}

const changeBackgroundEffect = (effect) => {
  let test = pageEffects[effect];
  if (typeof test !== "undefined") {
    page = effect;    
  }
};


const debounce = (ms, fn) => {
  let timeoutID = null;
  
  return () => {
    if (timeoutID != null) {
      window.clearTimeout(timeoutID);
    } 
    timeoutID = window.setTimeout(() => {
      timeoutID = null;
      fn();
    }, ms);
  }
};

window.addEventListener("resize", debounce(250, () => {
  
  // first copy the data from the current canvas
  let offscreen = document.createElement("canvas")
  offscreen.width = window.innerWidth;
  offscreen.height = window.innerHeight;
  let $offscreen = offscreen.getContext("2d");
  $offscreen.drawImage(canvas, 0, 0);
  
  // resize, which clears the image
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // redraw
  $.drawImage(offscreen, 0, 0)
  
}));

canvas.addEventListener("mousemove", (e) => {
  
  [mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
  let effect = pageEffects[page];
  effect.call(effect, mouse);

});



export default {
  canvas,
  context: $,
  changeBackgroundEffect,
}