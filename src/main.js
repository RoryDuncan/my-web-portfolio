
import pages from "./pages";

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
})

const removeActiveNavClass = () => {
  [].forEach.call( anchors, (el) => el.classList.remove("active"));
};

const changePageContentTo = (page) => {
  
  let pageName = (page.split(".html") || [null])[0];
  
  if (pageName == null) {
    console.log("Invalid page:", pageName)
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
  
}


window.addEventListener('popstate', function(e) {
  // e.state is equal to the data-attribute of the last image we clicked
  changePageContentTo(e.state);
});
