(function () {
'use strict';

var about = "\n<div class=\"about\">\n  <h1>About Me </h1>\n  <p>Located in Chico, CA; I spend a greater portion of my time working on side projects or helping friends with theirs. I have a passion for entrepreneurship and software, and their application for making society healthier and more educated.</p>\n  <h3>Other Interests</h3>\n  <ul class=\"interests\">\n    <li class=\"interest\">hiking / exploring</li>\n    <li class=\"interest\">Coffee</li>\n    <li class=\"interest\">Design</li>\n    <li class=\"interest\">Video Games and eSports</li>\n    <li class=\"interest\">Post-Punk and Post-Hardcore Music</li>\n    <li class=\"interest\">Video game development / interactive art</li>\n    <li class=\"interest\">Hayao Miyazaki / Wes Anderson Films</li>\n  </ul>\n</div>";

var introduction = "\n<div class=\"introduction\">\n  <h1>Introduction</h1>\n  <div class=\"skills\">\n    <p>I have a focused interest in product development—from a software engineering perspective. My related soft skills are design, UI/UX, branding, authorship, and code architecture.</p>\n    <h2>Idealogies of Self</h2>\n    <ul class=\"vantages\">\n      <li> \n        <h3> <a href=\"http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf#page=32\" target=\"_blank\" rel=\"noopener\">T-Shaped: A compound of breadth—and depth—of knowledge.</a></h3>\n        <p>Best described by Valve Software: a T-Shaped person has broad knowledge in conjunction with focused expertise.</p>\n      </li>\n      <li>\n        <h3> <a href=\"http://www.saffo.com/02008/07/26/strong-opinions-weakly-held/\" target=\"_blank\" rel=\"noopener\">Strong views, weakly held.</a></h3>\n        <p>Seemingly coined by Paul Saffo; the continued use and defense of solutions until a stronger counter-argument is provided.</p>\n      </li>\n    </ul>\n  </div>\n</div>";

var work = "\n<div class=\"work\">\n  <h1>Work History</h1>\n  <ul class=\"work-history\">\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Software Engineer</li>\n      </ul>\n      <div class=\"business-name\">Work Truck Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Director of Project Development</li>\n        <li class=\"position\">Fullstack Developer</li>\n        <li class=\"position\">Author</li>\n      </ul>\n      <div class=\"business-name\">Modern Developer, Inc.</div>\n      <div class=\"location\">Remote</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Front End Developer</li>\n        <li class=\"position\">Client Support</li>\n      </ul>\n      <div class=\"business-name\">Steps Marketing</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Junior Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Navigation North Learning Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Intern Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Primary Prevention Plus</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Graphic and Media Designer</li>\n      </ul>\n      <div class=\"business-name\">Freelancer</div>\n      <div class=\"location\">Remote</div>\n    </li>\n  </ul>\n</div>";

var contact = "\n<div class=\"contact\">\n  <h1>Let's Connect</h1>\n  <p>There are many platforms available for you to get in touch with me.</p>\n  <ul class=\"connecting-means\">\n    <li><a href=\"mailto:rory@meow.coffee\"><code>rory@meow.coffee</code></a></li>\n    <li><a href=\"https://www.linkedin.com/in/rory-duncan-53288b79/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a></li>\n    <li><a href=\"https://www.facebook.com/rory.meow.coffee\" target=\"_blank\" rel=\"noopener\">Facebook</a></li>\n    <li><a href=\"https://github.com/RoryDuncan\" target=\"_blank\" rel=\"noopener\">GitHub</a></li>\n  </ul>\n</div>";

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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gridSize = 10;


const $ = canvas.getContext("2d");
const mouse = {
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
});

canvas.addEventListener("mousemove", (e) => {
  [mouse.x, mouse.y] = normalizeMouse(e.clientX, e.clientY);
  
  renderBlip(mouse.x, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x - gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x + gridSize, mouse.y);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y + gridSize);
  if (Math.random() >= 0.75) renderBlip(mouse.x, mouse.y - gridSize);
});

let content = document.querySelectorAll("content")[0];
let anchors = document.querySelectorAll("nav a");


[].forEach.call( anchors, (el) => {
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

const removeActiveNavClass = () => {
  [].forEach.call( anchors, (el) => el.classList.remove("active"));
};

const changePageContentTo = (pageHref) => {
  
  let pageName = (pageHref.split(".html") || [null])[0];
  
  if (pageName == null) {
    console.log("Invalid page:", pageName);
    return;
  }
  
  
  if (pageName === "" || pageName === "index") pageName = "introduction";
  
  let page = pages[pageName];
  if (!page) {
    document.title = "404 Not Found";
    content.innerHTML = "No content found.";
  }
  else {
    document.title = page.title;
    content.innerHTML = page.content;
  }
  
};


window.addEventListener('popstate', function(e) {
  // e.state is equal to the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});

}());
