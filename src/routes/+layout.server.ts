import type { ServerLoad } from "@sveltejs/kit";

import { chars } from "$lib/app/code-chars";
import { articles } from "$lib/server/articles";

const base = Array.from({ length: 16 * 16 }).fill(true);

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

export const load: ServerLoad = ({ url }) => {
  const name = url.searchParams.get("name") ?? ``;
  const realm = base.map(() => randomChar());

  return {
    hero: {
      name,
      realm,
    },
    articles,
  };
};
