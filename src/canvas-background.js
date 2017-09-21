
let canvas = document.getElementById("bg-layer");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const $ = canvas.getContext("2d");
const gridSize = 10;

const mouse = {
  x: 0,
  y: 0,
};

$.fillStyle = "#bbb";

const renderBlip = (x, y) => {
  let size = gridSize;
  let halfSize = size / 2;
  $.fillRect(x - halfSize, y - halfSize, halfSize, halfSize);
};

const renderBlipGroup = (x, y) => {
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

canvas.addEventListener("mousemove", (e) => {
  
  [mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
  let effect = pageEffects[page];
  effect.call(effect, mouse);

});

const changeBackgroundEffect = (effect) => {
  
}


export default {
  canvas,
  context: $,
  changeBackgroundEffect,
}