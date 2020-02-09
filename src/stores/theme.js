import { writable } from "svelte/store";

export const THEMES = {
  none: "none",
  ocean: "ocean",
};

export const theme = writable(THEMES.none);


theme.subscribe((value) => {

  console.log("theme changed:", value);

})