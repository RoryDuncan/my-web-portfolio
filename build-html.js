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


// check if "env=dev" was passed.
// in development we link to the css stylesheet, while in prod we inline it into the layout
var env = "prod";
var flag = process.argv[2];
var css = fs.readFileSync("public/css/main.css", {encoding: "utf8"});
var pretty = false;

if (flag === "env=development" || flag === "env=dev") {
  env = "dev";
  pretty = true;
}


const renderPugIntoHTML = (filename, i, arr) => {
  
  let input = `src/views/pages/${filename}.pug`;
  let output = `public/${filename}.html`;
  let html = pug.renderFile(input, { 
    pretty: pretty,
    page:   filename,
    env:    env,
    css:    css,
  });
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

