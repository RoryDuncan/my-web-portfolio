(function () {
'use strict';

var about = "\n<div class=\"about\">\n  <h1>About Me </h1>\n  <p>Currently living in Chico, CA; I spend a greater portion of my time working on side projects or helping friends with theirs.</p>\n  <p>I have a passion for entrepreneurship and software, and their application for making society healthier and more educated.</p>\n  <p>I venture to be a communicative, transparent, and mindful human.</p>\n  <h3>Other Interests</h3>\n  <ul class=\"interests\">\n    <li class=\"interest\">foosball</li>\n    <li class=\"interest\">hiking / exploring</li>\n    <li class=\"interest\">coffee</li>\n    <li class=\"interest\">design</li>\n    <li class=\"interest\">video games and eSports</li>\n    <li class=\"interest\">post-punk and post-hardcore music</li>\n    <li class=\"interest\">video game development / interactive art</li>\n    <li class=\"interest\">Hayao Miyazaki / Wes Anderson films</li>\n  </ul>\n</div>";

var introduction = "\n<div class=\"introduction\">\n  <h1>Introduction</h1>\n  <div class=\"skills\">\n    <p>I have a focused interest in product development—from a software engineering perspective—and auxilary skills in design, UI/UX, branding, authorship, and code architecture.</p>\n    <h2>Idealogies of Self</h2>\n    <ul class=\"vantages\">\n      <li> \n        <h3> <a href=\"http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf#page=32\" target=\"_blank\" rel=\"noopener\">T-Shaped: A compound of breadth—and depth—of knowledge.</a></h3>\n        <p>Best described by Valve Software: a T-Shaped person has broad knowledge in conjunction with focused expertise.</p>\n      </li>\n      <li>\n        <h3> <a href=\"http://www.saffo.com/02008/07/26/strong-opinions-weakly-held/\" target=\"_blank\" rel=\"noopener\">Strong views, weakly held.</a></h3>\n        <p>Seemingly coined by Paul Saffo; the continued use and defense of solutions until a stronger counter-argument is provided.</p>\n      </li>\n    </ul>\n  </div>\n</div>";

var work = "\n<div class=\"work\">\n  <h1>Work History</h1>\n  <ul class=\"work-history\">\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Software Engineer</li>\n      </ul>\n      <div class=\"business-name\">Work Truck Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>This is my current position.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Director of Project Development</li>\n        <li class=\"position\">Fullstack Developer</li>\n        <li class=\"position\">Author</li>\n      </ul>\n      <div class=\"business-name\">Modern Developer, Inc.</div>\n      <div class=\"location\">\n        Rockwell, MD  <i>(Remote)</i></div>\n      <div class=\"description\">\n        <p>A developer training academy in which I worked integratedly with the CEO to provide decisively meaningful direction and content, engineering company-wide solutions, and authoring materials for students.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Front End Developer</li>\n        <li class=\"position\">Client Support</li>\n      </ul>\n      <div class=\"business-name\">Steps Marketing</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>Developed static web sites from design documents and provided support, maintainence, and updates using HTML, C#, LESS, MVC, .NET, & javascript.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Junior Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Navigation North Learning Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>Worked with a small team developing a niche, data-driven, web application using technologies such as Bootstrap, Stylus, Backbone.js, Marionette.js, Laravel, and Redis.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Intern Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Primary Prevention Plus</div>\n      <div class=\"location\">Chico, CA</div>\n      <div class=\"description\">\n        <p>My first internship, in which a professor noticed my aptitude for programming. Developed a basic user-centered website with Javascript, PHP, and mySQL.</p>\n      </div>\n    </li>\n    <li class=\"item\" tab-index=\"0\">\n      <ul class=\"positions\">\n        <li class=\"position\">Graphic and Media Designer</li>\n      </ul>\n      <div class=\"business-name\">Freelancer</div>\n      <div class=\"location\">Remote</div>\n      <div class=\"description\">\n        <p>I first gained an interest for technology via photography, and subsequently design. I mastered Photoshop early in highschool and would design banners, logos, and other visual content for bands and other interested individuals, finding clients via MySpace. Interestingly enough, I learned rudimentary HTML and CSS by requests for designing MySpace profiles. Aware of the limited capabilities of HTML and CSS—at the time—I perceived visual design the key to impactful experiences on the web.</p>\n      </div>\n    </li>\n  </ul>\n  <h2>Synopsis</h2>\n  <p>My experience with web development began with a focus on Javascript, due to it's foreseeable market growth. Resultingly, my preferred web stack is Node.js backend, with a state-driven UI framework for the front-end, when appropriate.</p>\n  <p>I usually kickstart my projects with firebase, and I prefer micro-service architectures over large, single-sourced architectures.</p>\n  <h2>Projects</h2>\n  <p>I house a variety of projects on <a href=\"https://github.com/RoryDuncan?tab=repositories\" rel=\"noopener\" target=\"_blank\">GitHub</a>—including \n     <a href=\"https://github.com/RoryDuncan/Portfolio-2017\" rel=\"noopener\" target=\"_blank\">the source of this portfolio</a>.\n  </p>\n</div>";

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



const mouse = {
  x: 0,
  y: 0,
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
});

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
  
};

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

canvas.addEventListener("mousemove", (e) => {
  
  [mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
  let effect = pageEffects[currentEffect];
  effect.call(effect, mouse);

});

var renderer = {
  canvas,
  context: $,
  changeBackgroundEffect,
};

let content = document.querySelectorAll("content")[0];
let anchors = document.querySelectorAll("nav a");

var useHref = document.querySelectorAll(".use-href")[0] || null;

if (!useHref) {
  
  [].forEach.call( anchors, (el) => {
    el.addEventListener("click", (e) => {
      let page = e.target.getAttribute("href"); 
      e.preventDefault();
      e.stopPropagation();
      window.history.pushState(page, null, e.target.getAttribute("href"));
      changePageContentTo(page);
      
      if (page == "/work") {
        renderer.changeBackgroundEffect("blip-line");
      }
      else {
        renderer.changeBackgroundEffect("blip-grid");
      }
      
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
    
    window.setTimeout(() => {
      content.classList.remove("animation--change-page");    
    }, 400);
  }
  
};


window.addEventListener('popstate', function(e) {
  // e.state is equal to the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});

}());
