import { writable } from "svelte/store";

export const THEMES = {
  none: "none",
  clouds: "clouds",
};

export const theme = writable(THEMES.none);