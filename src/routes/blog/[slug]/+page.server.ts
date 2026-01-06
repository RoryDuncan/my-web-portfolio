import { error, redirect, } from "@sveltejs/kit";
import type { EntryGenerator, PageServerLoad } from "./$types";
import { articles, articlesBySlug } from "$lib/server/articles";
import { render } from 'svelte/server';
import { dev } from "$app/environment";


export const prerender = false;

export const entries: EntryGenerator = () => {
	return articles.map((art) => {
        return {
            slug: art.slug,
        }
    });
};


export const load: PageServerLoad = async ({ params, }) => {

    const slug = params.slug ?? "";
    if (slug === "") {
        redirect(301, "/blog");
    }

    const articleModule = articlesBySlug.get(slug);
    if (articleModule === undefined) {
        error(404, "Article not found");
    }

    const ssrContent = render(articleModule.default);

    const { body, head } = ssrContent;
    const { metadata} = articleModule;
    if (!body || body === "") {
        error(404, "Article not found");
    }

    if (!dev && metadata?.published === false) {
        error(404, "Article not found");
    }
    
    return {
        article: {
            body,
            head,
            metadata,
        },
        slug,
    }
}