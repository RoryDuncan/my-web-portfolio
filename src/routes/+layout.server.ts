import type { ServerLoad } from "@sveltejs/kit";

import { chars } from "$lib/app/code-chars";

const base = Array.from({ length: 16 * 16 }).fill(true);

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

export const load: ServerLoad = ({ url }) => {
  const name = url.searchParams.get("name") ?? `rory`;
  const realm = base.map(() => randomChar());

  const validIndices = Array.from({ length: realm.length }, (_, i) => i).filter((i) => {
    const col = i % 16;
    const row = Math.floor(i / 16);
    return row >= 1 && row <= 3 && col >= 2 && col < 10;
  });
  const midpoint = validIndices[Math.floor(Math.random() * validIndices.length)];
  const p1 = realm.slice(0, midpoint);
  const p2 = realm.slice(midpoint + name.length);

  return {
    hero: {
      name,
      realm,
      part1: p1,
      part2: p2,
    },
  };
};
