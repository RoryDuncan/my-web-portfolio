import type { Component } from "svelte";

export type FrontMatterMetaData = {
  title: string;
  published?: boolean;
  author?: string;
  date?: string;
};

type FrontMatterModule = { default: Component; metadata?: FrontMatterMetaData };

export type Article = {
  published: boolean;
  slug: string;
  title: string;
  date: string;
  author: string;
}

export const articleFiles = import.meta.glob<FrontMatterModule>("./articles/*.svx", {
  eager: true,
});


export const articlesBySlug: Map<string, FrontMatterModule> = new Map(
  Object.entries(articleFiles).map(([path, mod]) => {
    console.log(path, mod);
    const slug = path.replace("./articles/", "").replace(".svx", "").toLowerCase();
    console.log("Creating blog post for:", slug);
    return [slug, mod];
  }),
);

export const articles = Array.from(articlesBySlug.entries())
  .map(([key, mod]) => {
    return {
      slug: key,
      published: mod.metadata?.published ?? false,
      title: mod.metadata?.title ?? `"${key}" is missing an h1`,
      date: mod.metadata?.date ?? "1/1/1975",
      author: mod.metadata?.author ?? "Rory",
    };
  })
  .sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    if (aDate.toString() === "Invalid Date") {
      return 1;
    }

    if (bDate.toString() === "Invalid Date") {
      return -1;
    }

    return aDate.valueOf() - bDate.valueOf();
  });