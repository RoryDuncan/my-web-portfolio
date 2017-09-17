
let canvas = document.getElementById("bg-layer");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gridSize = 10;


const $ = canvas.getContext("2d");
const mouse = {
  x: 0,
  y: 0,
};

const previousMouse = {
  x: 0,
  y: 0,
};

const renderBlip = (x, y) => {
  let size = gridSize;
  let halfSize = size / 2;
  $.fillStyle = "#bbb";
  $.fillRect(x - halfSize, y - halfSize, halfSize, halfSize);
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

canvas.addEventListener("mousemove", (e) => {
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  [mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
  
  renderBlip(mouse.x, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x - gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x + gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y + gridSize);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y - gridSize);
});

export default {
  canvas,
  context: $,
}