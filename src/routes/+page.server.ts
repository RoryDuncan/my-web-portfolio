import { articles } from "$lib/server/articles";
import type { Load } from "@sveltejs/kit";

export const load: Load = () => {
  return {
    hasPublishedArticles: articles.filter(f => f.published === true).length > 0
  };
};
