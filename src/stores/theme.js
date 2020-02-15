import { writable } from "svelte/store";

export const THEMES = {
  none: "none",
  clouds: "clouds",
  pixel: "pixel",
};

export const theme = writable(THEMES.none);