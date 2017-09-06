(function () {
'use strict';

var about = "\n<div class=\"about\">\n  <h1>About Me </h1>\n  <p>I enjoy the company of cats, and consuming espresso fervently.</p>\n  <p>Located in Chico, CA; I spend a greater portion of my time working on side projects, or helping friends with theirs.</p>\n  <p>I have a deep ambition to combine entrepreneurship and software to make society healthier and more educated—and of opening a cat cafe or cat theatre.</p>\n  <h3>Other Interests</h3>\n  <ul class=\"list\">\n    <li>design</li>\n    <li>hiking</li>\n    <li>eSports</li>\n    <li> <a href=\"https://www.youtube.com/watch?v=w6o-QyqP5gQ\" target=\"_blank\" rel=\"noopener\">angsty music</a></li>\n    <li>video game development</li>\n    <li>Hayao Miyazaki</li>\n    <li>Wes Anderson</li>\n  </ul>\n</div>";

var introduction = "\n<div class=\"introduction\">\n  <h1>Introduction</h1>\n  <div class=\"skills\">\n    <p>I have a focused interest in design, user interaction, user experience, education, product development, branding, authorship, and code architecture. </p>\n    <h2>Work Idealogy</h2>\n    <p>I have an insatiable enthusiasm for startups and prototyping, and the optimum workplace culture.</p>\n    <p>I align myself with the expression <a href=\"http://www.saffo.com/02008/07/26/strong-opinions-weakly-held/\" target=\"_blank\" rel=\"noopener\">strong views, weakly held</a>, and am continually building myself into a magnificent <a href=\"http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf#page=32\" target=\"_blank\" rel=\"noopener\">T-Shape</a>.</p>\n  </div>\n</div>";

var work = "\n<div class=\"work\">\n  <h1>Work History</h1>\n  <ul class=\"work-history\">\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Software Engineer</li>\n      </ul>\n      <div class=\"business-name\">Work Truck Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Director of Project Development</li>\n        <li class=\"position\">Fullstack Developer</li>\n        <li class=\"position\">Author</li>\n      </ul>\n      <div class=\"business-name\">Modern Developer, Inc.</div>\n      <div class=\"location\">Remote</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Front End Developer</li>\n        <li class=\"position\">Client Support</li>\n      </ul>\n      <div class=\"business-name\">Steps Marketing</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Junior Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Navigation North Learning Solutions</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Intern Web Developer</li>\n      </ul>\n      <div class=\"business-name\">Primary Prevention Plus</div>\n      <div class=\"location\">Chico, CA</div>\n    </li>\n    <li class=\"item\">\n      <ul class=\"positions\">\n        <li class=\"position\">Graphic and Media Designer</li>\n      </ul>\n      <div class=\"business-name\">Freelancer</div>\n      <div class=\"location\">Remote</div>\n    </li>\n  </ul>\n</div>";

var contact = "\n<div class=\"contact\">\n  <h1>Connecting With Me</h1>\n  <p>blah blah blah</p>\n</div>";

var pages = {
  about,
  introduction,
  work,
  contact,
};

console.log("hey", pages);

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

const changePageContentTo = (page) => {
  
  let pageName = (page.split(".html") || [null])[0];
  
  if (pageName == null) {
    console.log("Invalid page:", pageName);
    return;
  }
  
  if (pageName === "" || pageName === "index") pageName = "introduction";
  
  let pageContent = pages[pageName];
  if (!pageContent) {
    content.innerHTML = "No content found.";
  }
  else {
    content.innerHTML = pageContent;
  }
  
};


window.addEventListener('popstate', function(e) {
  // e.state is equal to the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});

}());
