
let canvas = document.getElementById("bg-layer");

const $ = canvas.getContext("2d");
const gridSize = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const throttle = (delay, fn) => {
  
  let lastCalled = null;
  
  return (...args) => {
    let now = Date.now();
    if (lastCalled === null || now >= lastCalled + delay) {
      lastCalled = now;
      fn(...args)
    }
  }
  
}

class Mouse {
  
  constructor() {
    this.x = 0;
    this.y = 0;
    this.previous = {
      x: 0,
      y: 0,
    }
    
    this.setPrevious = throttle(500, this.setPrevious.bind(this))
  }
  
  setPrevious() {
    this.previous.x = this.x
    this.previous.y = this.y
  }
  
}

const mouse = new Mouse();

const normalizeMouse = (x, y) => {
  let _x = Math.round(x / gridSize) * gridSize;
  let _y = Math.round(y / gridSize) * gridSize;
  return [+_x, +_y];
};

// prevent right clicking.
canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})


const debounce = (ms, fn) => {
  let timeoutID = null;
  
  return (...args) => {
    if (timeoutID != null) {
      window.clearTimeout(timeoutID);
    } 
    timeoutID = window.setTimeout(() => {
      timeoutID = null;
      fn(...args);
    }, ms);
  }
};

let currentEffect = "pixel-line";

const offscreen = document.createElement("canvas")
const factor = 100;
offscreen.width = window.innerWidth / factor;
offscreen.height = window.innerHeight / factor;
let $offscreen = offscreen.getContext("2d");
const backgroundColor = window.getComputedStyle(document.body, null).getPropertyValue("--body-background-color");

const colors = ["#000b0b", "#1b0202", "#0b0b0b", "#1b1b1b", "#000"]
let currentColor = colors[~~(Math.random() * colors.length)]

const pixelationSpillEffect = (mouse) => {
  
  let color = currentColor;
  
  let w = offscreen.width   = window.innerWidth / factor
  let h = offscreen.height  =  window.innerHeight / factor
  // $offscreen = offscreen.getContext("2d");
  

  $offscreen.fillStyle = backgroundColor
  $offscreen.fillRect(0, 0, w, h)
  $offscreen.drawImage(canvas, 0, 0, w, h)
  $offscreen.beginPath()
  $offscreen.moveTo(mouse.previous.x / factor, mouse.previous.y / factor)
  $offscreen.quadraticCurveTo(Math.random() * w / factor, Math.random() * h / factor, mouse.x / factor, mouse.y / factor)
  $offscreen.strokeStyle = color
  $offscreen.stroke()
  $offscreen.closePath()
  $.imageSmoothingEnabled = false

  $.drawImage(offscreen, 0, 0, window.innerWidth, window.innerHeight)

}

const clearingCircleRadius = 0;

document.querySelectorAll(".brand-title")[0].addEventListener("click", (e) => {
  
})

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

const updateColor = throttle(1000, () => {
  currentColor = colors[~~(Math.random() * colors.length)]
})

document.body.addEventListener("mousemove", (e) => {
  mouse.setPrevious()
  updateColor()
  ;[mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
});



const render = (t) => {
  pixelationSpillEffect(mouse)
  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)

export default {
  canvas,
  context: $,
}