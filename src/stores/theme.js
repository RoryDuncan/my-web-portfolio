import { writable } from "svelte/store";

export const THEMES = {
  none: "none",
  clouds: "clouds",
  pixels: "pixels",
};

export const theme = writable(THEMES.none);