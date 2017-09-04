// compiles the pug template into our index.html
const fs = require("fs");
const pug = require("pug");

const filePath = "src/views/";
const pages =  [
  "index",
  "about",
  "contact",
  "work",
];


const renderPugIntoHTML = (filename, i, arr) => {
  
  let input = `src/views/pages/${filename}.pug`;
  let output = `public/${filename}.html`;
  let html = pug.renderFile(input, {pretty: true,});
  let tally = `(${i + 1} of ${arr.length + 1})`;
  
  fs.writeFile(output, html, "utf8", function (err) {
    if (err) 
      {
        console.log(`${tally}\t${filename}.html was not rendered.`);
        console.log("\t", err);
      }
    else 
      console.log(`${tally}\t${filename}.html rendered.`);
  });
};


pages.forEach(renderPugIntoHTML);

