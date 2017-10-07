
let canvas = document.getElementById("bg-layer");

const $ = canvas.getContext("2d");
const gridSize = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const mouse = {
  x: 0,
  y: 0,
};

const renderAfter = (time, fn) => {
  window.setTimeout(function(){
    window.requestAnimationFrame(fn);
  }, time)
};

const renderBlip = (x, y) => {
  let size = gridSize;
  let halfSize = size / 2;
  $.fillRect(x - halfSize, y - halfSize, halfSize, halfSize);
};

const renderBlipGroup = (x, y, color1, color2) => {
  $.fillStyle = color1 || "#bbb";
  renderBlip(x, y);
  $.fillStyle = color2 || "#d2d2d2";
  /*if (Math.random() >= 0.75)*/ renderBlip(x - gridSize, y);
  /*if (Math.random() >= 0.75)*/ renderBlip(x + gridSize, y);
  /*if (Math.random() >= 0.75)*/ renderBlip(x, y + gridSize);
  /*if (Math.random() >= 0.75)*/ renderBlip(x, y - gridSize);
};

const renderBlipCluster = (x, y, color1, color2) => {
  
  var modifiers = [4, 4, 4, 4].map(a => ~~(Math.random()*a));
  var origins = modifiers.map((a, i) => { 
    return {
      x: x + (gridSize * a * (i == 0 || i == 3 ? -1 : 1)),
      y: y + (gridSize * a * (i == 1 || i == 3 ? -1 : 1)),
    };
  });
  
  origins.forEach(a => renderBlipGroup(a.x, a.y, color1, color2));
  
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

let isWorkPage = (window.location.pathname.split("work").length > 1);
let currentEffect = isWorkPage ? "blip-line" : "blip-grid";
const pageEffects = {
  
  "blip-grid": (mouse) => {
    renderBlipCluster(mouse.x, mouse.y);  
  },
  
  "blip-line": (mouse) => {
    var dir = Math.random() >= 0.51 ? 1 : -1;
    var mods = new Array(20).fill(1).map((a, i) => gridSize * a * i * dir);
      
      $.fillStyle = "#e4e4e5";
      
      mods.forEach(a => renderBlip(mouse.x, mouse.y + a));
    
  },
  
}

const changeBackgroundEffect = (effect) => {
  let test = pageEffects[effect];
  if (typeof test !== "undefined") {
    currentEffect = effect;    
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
  let effect = pageEffects[currentEffect];
  effect.call(effect, mouse);

});

export default {
  canvas,
  context: $,
  changeBackgroundEffect,
}