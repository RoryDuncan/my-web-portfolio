// See https://svelte.dev/docs/kit/types#app.d.ts

import type { RouteId } from "$app/types";
import type { Component } from "svelte";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface PageState {
      subview?: RouteId;
    }
    // interface Platform {}
  }
}

export {};
