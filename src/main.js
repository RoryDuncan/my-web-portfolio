
import pages from "./pages";
import renderer from "./canvas-background.js";

let content = document.querySelectorAll("content")[0];
let anchors = document.querySelectorAll("nav a");

[].forEach.call( anchors, (el) => {
  el.addEventListener("click", (e) => {
    let page = e.target.getAttribute("href"); 
    e.preventDefault();
    e.stopPropagation();
    window.history.pushState(page, null, e.target.getAttribute("href"));
    changePageContentTo(page);
    
    if (page == "work.html") {
      renderer.changeBackgroundEffect("blip-line");
    }
    else {
      renderer.changeBackgroundEffect("blip-grid")
    }
    
    removeActiveNavClass();
    e.target.classList.add("active");
  }, false);
})

const removeActiveNavClass = () => {
  [].forEach.call( anchors, (el) => el.classList.remove("active"));
};

const changePageContentTo = (pageHref) => {
  
  let pageName = (pageHref.split(".html") || [null])[0];
  
  if (pageName == null) {
    console.log("Invalid page:", pageName)
    return;
  }
  
  
  if (pageName === "" || pageName === "index") pageName = "introduction";
  
  let page = pages[pageName];
  if (!page) {
    document.title = "404 Not Found";
    content.innerHTML = "No content found.";
  }
  else {
    document.title = page.title
    content.innerHTML = page.content;
  }
  
}


window.addEventListener('popstate', function(e) {
  // e.state is equal to the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});
