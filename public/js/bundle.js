(function () {
'use strict';

var about = "\n<div class=\"about\">\n  <h1>About Me </h1>\n  <p>Currently living in Chico, CA; I spend a greater portion of my time working on side projects or helping friends with theirs.</p>\n  <p>I tend to continiously have a side project underway, and I love to collaborate on ideas and projects.</p>\n  <h3>General Interests</h3>\n  <ul class=\"interests\">\n    <li class=\"interest\">coffee</li>\n    <li class=\"interest\">hiking and exploring</li>\n    <li class=\"interest\">foosball</li>\n    <li class=\"interest\">design</li>\n    <li class=\"interest\">video games and eSports</li>\n    <li class=\"interest\">post-punk and post-hardcore music</li>\n    <li class=\"interest\">video game development / interactive art</li>\n    <li class=\"interest\">Hayao Miyazaki and Wes Anderson films</li>\n  </ul>\n</div>";

var introduction = "\n<div class=\"introduction\">\n  <h1>Introduction</h1>\n  <div class=\"skills\">\n    <p>I am a well-rounded software engineer with auxiliary skills in web application performance, prototyping, design, branding, UI/UX, systems design, and architecture.</p>\n    <p>I have a passion for entrepreneurship and software, and their application for making society healthier and more educated.</p>\n    <p>My aim is to always be communicative, transparent, and mindful.</p>\n  </div>\n</div>";

var work = "\n<div class=\"work\">\n  <h1>Work History</h1>\n  <ul class=\"work-history\">\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Software Engineer</li>\n      </ul>\n      <div class=\"business-name\">Work Truck Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>This is my current position. I work with a large team of talented engineers in an agile environment.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Director of Project Development</li>\n        <li class=\"position\">Fullstack Developer</li>\n        <li class=\"position\">Author</li>\n      </ul>\n      <div class=\"business-name\">Modern Developer, Inc.</div>\n      <div class=\"location\">\n        Rockwell, MD  <i>(Remote)</i></div>\n      <div class=\"description\">\n        <p>Worked integratedly with the CEO to decisively direct meaningful content, engineering company-wide solutions, and authoring materials for students at a prestigious \"Dev-Bootcamp\".</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Front End Developer</li>\n        <li class=\"position\">Client Support</li>\n      </ul>\n      <div class=\"business-name\">Steps Marketing</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>Worked independently to develop informational web sites from design sources and provided support, maintainence, and updates using HTML, C#, LESS, MVC, .NET, & JavaScript.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Junior Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Navigation North Learning Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>Worked with a small team developing a niche, data-driven, web application using Bootstrap, Stylus, Backbone.js, Marionette.js, Laravel, and Redis.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Intern Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Primary Prevention Plus</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>Having an aptitude for programming caught the attention of a professor—leading to my first internship. Worked with a small team to develop a gamified Healthcare service using JavaScript, PHP, and mySQL.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Graphic and Media Designer</li>\n      </ul>\n      <div class=\"business-name\">Freelancer</div>\n      <div class=\"location\">Remote</div>\n      <div class=\"description\">\n        <p>I first gained an interest for technology via photography, and subsequently design. Utilizing mastery of Photoshop to designed banners, logos, and other visual and web content for various clients.</p>\n      </div>\n    </li>\n  </ul>\n  <h2>Synopsis</h2>\n  <p>I have engineered and acted as a lead on a variety of projects. I am enamored with developing clean architectures—finding satisfaction and challenge in engineering scalable systems and the transition into a beautiful product. Additionally, I have an expertise in writing high performance browser applications due to my interest with browser-based video game development.</p>\n  <p>I tend to kickstart personal projects with some Node.js backend and/or a firebase instance.</p>\n  <h2>Projects</h2>\n  <p>I house a variety of projects on <a href=\"https://github.com/RoryDuncan?tab=repositories\" rel=\"noopener\" target=\"_blank\">GitHub</a>! </p>\n  <h3>Recent Notable Projects</h3>\n  <p><a href=\"https://dota2-viewing-party-app.firebaseapp.com/\" rel=\"noopener\" target=\"_blank\">Multi-Screen Control for Dota 2 TI</a><br>A web app that allows you to control the display of multiple 'screens' from a host route utilizing the websocket nature of Firebase's Realtime Database.</p>\n  <p><a href=\"https://lmytfy.com\" rel=\"noopener\" target=\"_blank\">LMYTFY</a><br>A challenge to build a lmgtfy-like site within 40 minutes. I succeeded!</p>\n  <p><a href=\"https://github.com/RoryDuncan/suki.js\" rel=\"noopener\" target=\"_blank\">Suki.js </a><br>A personal endeavor to create a modular and extensible ES7 game framework.</p>\n  <p><a href=\"https://github.com/RoryDuncan/Portfolio-2017\" rel=\"noopener\" target=\"_blank\">my portfolio </a><br>This site! I challenged myself to build a new portfolio which had a 100/100 Google Page Speed Insight rating. It is also statically rendered!</p>\n</div>";

var contact = "\n<div class=\"contact\">\n  <h1>Let's Connect</h1>\n  <p>Feel free to reach out to me, by whatever means will work best for you.</p>\n  <ul class=\"connecting-means\">\n    <li><a href=\"mailto:rory@meow.coffee\">rory@meow.coffee</a></li>\n    <li><a href=\"https://www.linkedin.com/in/rory-duncan-53288b79/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a></li>\n    <li><a href=\"https://www.facebook.com/rory.meow.coffee\" target=\"_blank\" rel=\"noopener\">Facebook</a></li>\n    <li><a href=\"https://github.com/RoryDuncan\" target=\"_blank\" rel=\"noopener\">GitHub</a></li>\n    <li> <a href=\"https://www.instagram.com/robustrory/\" target=\"_blank\" rel=\"noopener\">Instagram</a></li>\n  </ul>\n</div>";

const getTitle = (html) => {
  let title = html.split("</h1>")[0];
  title = title.split("<h1>")[1];
  return title.trim();
};

var pages = {
  about: {
    content: about,
    title: getTitle(about),
  },
  introduction: {
    content: introduction,
    title: getTitle(introduction),
  },
  work: {
    content: work,
    title: getTitle(work),
  },
  contact: {
    content: contact,
    title: getTitle(contact),
  },
};

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
      fn(...args);
    }
  }
  
};

class Mouse {
  
  constructor() {
    this.x = 0;
    this.y = 0;
    this.previous = {
      x: 0,
      y: 0,
    };
    
    this.setPrevious = throttle(500, this.setPrevious.bind(this));
  }
  
  setPrevious() {
    this.previous.x = this.x;
    this.previous.y = this.y;
  }
  
}

const mouse = new Mouse();

const normalizeMouse = (x, y) => {
  let _x = Math.round(x / gridSize) * gridSize;
  let _y = Math.round(y / gridSize) * gridSize;
  return [+_x, +_y];
};

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

const offscreen = document.createElement("canvas");
const factor = 100;
offscreen.width = window.innerWidth / factor;
offscreen.height = window.innerHeight / factor;
let $offscreen = offscreen.getContext("2d");
const backgroundColor = window.getComputedStyle(document.body, null).getPropertyValue("--body-background-color");

const colors = ["#000b0b", "#1b0202", "#0b0b0b", "#1b1b1b", "#000"];
let currentColor = colors[~~(Math.random() * colors.length)];

const pixelationSpillEffect = (mouse) => {
  
  let color = currentColor;
  
  let w = offscreen.width   = window.innerWidth / factor;
  let h = offscreen.height  =  window.innerHeight / factor;
  // $offscreen = offscreen.getContext("2d");
  

  $offscreen.fillStyle = backgroundColor;
  $offscreen.fillRect(0, 0, w, h);
  $offscreen.drawImage(canvas, 0, 0, w, h);
  $offscreen.beginPath();
  $offscreen.moveTo(mouse.previous.x / factor, mouse.previous.y / factor);
  $offscreen.quadraticCurveTo(Math.random() * w / factor, Math.random() * h / factor, mouse.x / factor, mouse.y / factor);
  $offscreen.strokeStyle = color;
  $offscreen.stroke();
  $offscreen.closePath();
  $.imageSmoothingEnabled = false;

  $.drawImage(offscreen, 0, 0, window.innerWidth, window.innerHeight);

};

document.querySelectorAll(".brand-title")[0].addEventListener("click", (e) => {
  
});

window.addEventListener("resize", debounce(250, () => {
  
  // first copy the data from the current canvas
  let offscreen = document.createElement("canvas");
  offscreen.width = window.innerWidth;
  offscreen.height = window.innerHeight;
  let $offscreen = offscreen.getContext("2d");
  $offscreen.drawImage(canvas, 0, 0);
  
  // resize, which clears the image
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // redraw
  $.drawImage(offscreen, 0, 0);
  
}));

const updateColor = throttle(1000, () => {
  currentColor = colors[~~(Math.random() * colors.length)];
});

document.body.addEventListener("mousemove", (e) => {
  mouse.setPrevious();
  updateColor()
  ;[mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
});



const render = (t) => {
  pixelationSpillEffect(mouse);
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

let content = document.querySelectorAll("content")[0];
let anchors = document.querySelectorAll("nav a");

var useHref = document.querySelectorAll(".use-href")[0] || null;

if (!useHref) {
  
  // add event listeners to all links
  [].forEach.call(anchors, (el) => {
    
    el.addEventListener("click", (e) => {
      
      let page = e.target.getAttribute("href"); 
      e.preventDefault();
      e.stopPropagation();
      window.history.pushState(page, null, e.target.getAttribute("href"));
      changePageContentTo(page);
      
      removeActiveNavClass();
      e.target.classList.add("active");
      
    }, false);
  });
}


const removeActiveNavClass = () => {
  [].forEach.call( anchors, (el) => el.classList.remove("active"));
};

const changePageContentTo = (pageHref) => {
  
  let pageName = pageHref.substr(1);
  
  if (pageName === "" || pageName === "index") pageName = "introduction";
  
  let page = pages[pageName];
  if (!page) {
    window.location = "/page-not-found";
  }
  else {
    
    content.classList.add("animation--change-page");
    content.innerHTML = page.content;
    document.title = page.title;
    
    // we use a 300 ms timeout -- it is slightly longer than our page animation at ~250ms
    window.setTimeout(() => {
      content.classList.remove("animation--change-page");
    }, 300);
  }
  
};

window.addEventListener('popstate', function(e) {
  // e.state is the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});

}());
