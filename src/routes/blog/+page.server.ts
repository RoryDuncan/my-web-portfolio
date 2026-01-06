import { articles } from "$lib/server/articles";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad =  async({ parent, }) => {
    
    return {
        articles,
    }
}