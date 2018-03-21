
import pages from "./pages";
import "./canvas-background";

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
    
    content.classList.add("animation--change-page")
    content.innerHTML = page.content;
    document.title = page.title;
    
    // we use a 300 ms timeout -- it is slightly longer than our page animation at ~250ms
    window.setTimeout(() => {
      content.classList.remove("animation--change-page")
    }, 300)
  }
  
}

window.addEventListener('popstate', function(e) {
  // e.state is the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});
