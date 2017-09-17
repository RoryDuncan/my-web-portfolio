import about from "./views/content/about.pug";
import introduction from "./views/content/introduction.pug";
import work from "./views/content/work.pug";
import contact from "./views/content/contact.pug";

const getTitle = (html) => {
  let title = html.split("</h1>")[0];
  title = title.split("<h1>")[1];
  return title.trim();
}

export default {
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
}
